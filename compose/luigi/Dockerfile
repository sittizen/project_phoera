FROM axiom/docker-luigi

RUN apt-get update && apt-get install -y subversion && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN pip install --upgrade pip && pip install lxml

COPY ./luigi/luigi_tasks.py /luigi/tasks/luigi_tasks.py
