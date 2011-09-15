var esc = require('./'),
    fs = require('fs');

var html = '<html><head><meta charset="utf-8"><title>example</title></head><body id="top"><a href="/some/other/file.html">Link</a><a href="http://example.com"><img src="/some/image.png"></a><a href="another-document">another doc</a><a href="#top">top</a></body></html>';

fs.writeFileSync('test-1.html', esc(html, { 'uri': 'http://example.com' }));

fs.writeFileSync('test-2.html', esc(html, { 'uri': 'http://example.com/' }));

fs.writeFileSync('test-3.html', esc(html, { 'uri': 'http://example.com/dir/doc.html' }));
