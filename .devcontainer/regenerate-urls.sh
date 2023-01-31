#!/bin/bash
find ./_site -name "*.html" -exec sed -i -e 's/"\/rtldev-middleware-documentation\//".\//g' {} \;
