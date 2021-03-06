# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-01-04 08:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('book_id', models.IntegerField()),
                ('title', models.CharField(max_length=256)),
                ('revision', models.IntegerField(default=0)),
            ],
        ),
        migrations.AlterUniqueTogether(
            name='book',
            unique_together=set([('book_id', 'revision')]),
        ),
    ]
