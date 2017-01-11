#!/bin/sh
consul agent -server -bootstrap-expect=1 -client=0.0.0.0 -data-dir=/tmp/consul -ui
