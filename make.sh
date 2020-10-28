#!/bin/bash
echo "javascript:(function()%7B$(yarn run -s terser)%7D)()" > main.out.js