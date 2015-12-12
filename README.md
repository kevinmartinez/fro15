# FRO15 Project
This is our Project. There are many others like it, but this one is ours.

### We can use Markdown to format the text in this file

* [The Markdown Official Page](https://daringfireball.net/projects/markdown/basics)
* [Article about Markdown](http://readwrite.com/2012/04/17/why-you-need-to-learn-markdown)
* [Markdown Cheat Sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# FRO 15 HTML Style Guide

## Format
### Använd endast små bokstäver (Only use lowercase letters)
**Fel:**
``` html
<A HREF="#">Index</A>
```
**Korrekt:**
``` html
<a href="#">Index</a>
```
### Ta bort tom yta (Remove trailing whitespace)
**Fel:**
``` html
<h1>Välkommen</h1>___
```
**Korrekt:**
``` html
<h1>Välkommen</h1>
```
### Teckenkodning (Encoding)
**Använd UTF-8:**
``` html
<meta charset="utf-8">
```
### Indentering (Indentation)
**Använd 2 spaces eller tabs**
### Dokumentformatering (Doctype)
**Använd alltid HTML5:**
``` html
<!DOCTYPE html>
```
### Stäng inte självstängande taggar (Don't close self closing tags)
**Fel:**
``` html
<hr/>
```
**Korrekt:**
``` html
<hr>
```
### Använd inte img taggar utan alt text (Don't use img tags without alt text)
**Fel:**
``` html
<img src="logo.png">
```
**Korrekt:**
``` html
<img src="logo.png" alt="FRO15 logo">
```
