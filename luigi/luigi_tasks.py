from __future__ import print_function

import os
import requests
from lxml import objectify, etree

from luigi import run as luigi_run
from luigi import Task, LocalTarget
from luigi.contrib.external_program import ExternalProgramTask
from luigi.format import MixedUnicodeBytesFormat


class PullCode(ExternalProgramTask):
    def program_args(self):
        if not os.path.exists('/var/local/projectaonsvn'):
            return ['bash', '/luigi/tasks/svn_co.sh']
        return ['bash', '/luigi/tasks/svn_up.sh']

    def complete(self):
        if not os.path.exists('/var/local/projectaonsvn'):
            return False
        return True

    def output(self):
        iso_format = MixedUnicodeBytesFormat('ISO-8859-1')
        files = [LocalTarget(os.path.join('/var/local/projectaonsvn/trunk/en/xml', f), format=iso_format)
                 for f in os.listdir('/var/local/projectaonsvn/trunk/en/xml') if f[-4:] == '.xml']
        return files


class DoSomeWork(Task):
    def requires(self):
        return PullCode()

    def complete(self):
        return False

    def output(self):
        return LocalTarget('/tmp/todo.txt')

    def run(self):
        for bookid, xmlsource in enumerate(self.input()):
            with xmlsource.open('r') as infile:
                try:
                    tree = objectify.parse(infile)
                    root = tree.getroot()
                    headers = {'Authorization': 'Token %s' % os.getenv('APIKEY')}
                    payload = {
                        "revision": 0,
                        "book_id": bookid,
                        "title": root.meta.title
                    }
                    requests.post('http://%s/api/books/' % os.getenv('APIHOST'), headers=headers, data=payload)
                except etree.XMLSyntaxError:
                    print("TODO sentry error log")


if __name__ == "__main__":
    luigi_run(['DoSomeWork', '--local-scheduler'])
