#!/bin/sh
convert "./*.jpg[300x]" -set filename:base "%[basename]" "./%[filename:base]-sm.jpg"
convert "./*.png[300x]" -set filename:base "%[basename]" "./%[filename:base]-sm.png"
convert "./*.jpeg[300x]" -set filename:base "%[basename]" "./%[filename:base]-sm.jpeg"
