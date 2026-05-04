#!/bin/bash
echo "$(date)" >> "posts/$(date +'%m-%d-%Y').txt"
echo "New Post" >> "posts/$(date +'%m-%d-%Y').txt"
echo "$(date +'%m-%d-%Y').txt" >> "posts/list.txt"