const markdownToHtml = (markdown) => {
  // Remove of all spaces at the start of each new line in the markdown string
  markdown = markdown.replace(/^ +/gm, '');

  // Convert headers
  markdown = markdown.replace(/^###### (.*$)/gim, '<h6>$1</h6>');
  markdown = markdown.replace(/^##### (.*$)/gim, '<h5>$1</h5>');
  markdown = markdown.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  markdown = markdown.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  markdown = markdown.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  markdown = markdown.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Convert bold text
  markdown = markdown.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');

  // Convert italic text
  markdown = markdown.replace(/\*(.*)\*/gim, '<em>$1</em>');

  // Convert links
  markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

  // Convert unordered list items
  markdown = markdown.replace(/^\*\s(.*)$/gim, '<ul>\n<li>$1</li>\n</ul>');
  markdown = markdown.replace(
    /^✓\s(.*)$/gim,
    `<ul style="list-style-type: '✓ ';">\n<li>$1</li>\n</ul>`
  );

  // Convert ordered list items
  markdown = markdown.replace(/^\d\.\s(.*)$/gim, '<ol>\n<li>$1</li>\n</ol>');

  // Convert line breaks
  markdown = markdown.replace(/\n\n$/gim, '<br />');

  // Remove extra <ul> and <ol> tags if they are immediately followed by another list
  markdown = markdown.replace(
    /<\/(ul|ol)>\n<(ul(\sstyle="list-style-type: '✓ ';")?)>/gim,
    ''
  );
  markdown = markdown.replace(/<\/(ul|ol)>\n<ol>/gim, '');
  markdown = markdown.replace(/<\/(ul|ol)><br>/gim, '');

  return markdown.trim(); // Trim leading/trailing whitespace
};
