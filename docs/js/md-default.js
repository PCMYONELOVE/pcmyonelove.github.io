/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
var date = new Date().toISOString();
var content = [
  '---',
  'title: Заголовок',
  'created: ' + date,
  'layout: post',
  '---',
  '',
  'Preview_text',
  '',
  '<!--more-->',
  '',
  '![image](https://via.placeholder.com/500x200)',
  '',
  // '# Заголовок',
  '',
  'Full_text'
].join('\n');
