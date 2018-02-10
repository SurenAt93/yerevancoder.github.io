webpackJsonp([58533573408837],{506:function(n,s){n.exports={data:{site:{siteMetadata:{title:"yerevancoder",author:"Coders of Armenia"}},markdownRemark:{id:"/Users/Edgar/Repos/yerevan-coder/src/pages/2018-02-06-simple-terminal-commands/index.md absPath of file >>> MarkdownRemark",html:'<h2>Documentation</h2>\n<p>Readers, I spent a lot of time to add as many examples as I can to this documentation</p>\n<p>So I will highly encourage to read this one day :D </p>\n<p>But I also advise you to first read Lecture notes\nsection and then the Documentation one!</p>\n<details>\n<summary>cd</summary>\n<h2>NAME</h2>\n<p>cd - Change Directory</p>\n<h2>DESCRIPTION</h2>\n<p>change the current working directory to a specific Folder.</p>\n<h2>SYNTAX</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ <span class="token function">cd</span> <span class="token punctuation">[</span>Options<span class="token punctuation">]</span> <span class="token punctuation">[</span>Directory<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<h2>OPTIONS</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>-P    Do not follow symbolic links\n-L    Follow symbolic links (default)</code></pre>\n      </div>\n<h2>EXAMPLES</h2>\n<p>Move to the sybase folder:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ <span class="token function">cd</span> /usr/local/sybase\n$ <span class="token function">pwd</span>\n/usr/local/sybase\n</code></pre>\n      </div>\n<p>Change to another folder:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ <span class="token function">cd</span> /var/log\n$ <span class="token function">pwd</span>\n/var/log\n</code></pre>\n      </div>\n<p>Quickly get back:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ <span class="token function">cd</span> - \n$ <span class="token function">pwd</span>\n/usr/local/sybase\n</code></pre>\n      </div>\n<p>move up one folder:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ <span class="token function">cd</span> <span class="token punctuation">..</span>\n$ <span class="token function">pwd</span>\n/usr/local/\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ <span class="token function">cd</span> <span class="token punctuation">(</span>Back to your home folder<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n</details>\n<details>\n<summary>pwd</summary>\n<h2>NAME</h2>\n<p>pwd - Print Working Directory</p>\n<h2>DESCRIPTION</h2>\n<p>print name of the current/working directory </p>\n<h2>SYNTAX</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">pwd</span> <span class="token punctuation">[</span>-LP<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<h2>OPTIONS</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>-P  : The pathname printed will not contain symbolic links.\n-L  : The pathname printed can contain symbolic links</code></pre>\n      </div>\n<p>The default action is to show the current folder as an absolute path.\nAll components of the path will be actual folder names - none will be symbolic links.</p>\n</details>\n<details>\n<summary>ls</summary>\n<h2>NAME</h2>\n<p>ls - list directory contents</p>\n<h2>DESCRIPTION</h2>\n<p>List information about  the FILEs (the current directory by default).</p>\n<h2>SYNTAX</h2>\n<p>the most common command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ <span class="token function">ls</span>\n</code></pre>\n      </div>\n<p>the same command in the general form:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ ls [OPTION]... [FILE]...</code></pre>\n      </div>\n<h2>OPTIONS</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>-a, --all   List all entries including those starting with a dot.\n-l   Use a long listing format (shows file or directory, size, modified date and time, file or folder name and owner of a file and it’s permission)\n-lh   Same as -l, but shows sizes in human readable format.\n-F     Add the ‘/’ Character at the end each directory.\n-r  Display files and directories in reverse order.\n-R  Recursively list Sub-Directories\n-ltr (VERY USEFUL) Shows latest modification file or directory date as last.\n-lS  (VERY USEFUL) Displays file size in order, will display big in size first.\n--help  Show help page, not everything is described here!</code></pre>\n      </div>\n<h2>EXAMPLES</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token comment"># List the contents of your home directory</span>\n$ <span class="token function">ls</span> ~\n\n<span class="token comment"># list everything in a vertical list:</span>\n$ <span class="token function">ls</span> -al\n\ntotal 109\ndrwxr-xr-x  18 root     root         4096 Jun  9 21:12 ./\ndrwxr-xr-x  18 root     root         4096 Jun  9 21:12 <span class="token punctuation">..</span>/\ndrwxr-xr-x   2 root     root         4096 Jun  9 21:14 bin/\ndrwxr-xr-x   3 root     root         1024 Jun  9 20:32 boot/\ndrwxr-xr-x   6 root     root        36864 Jul 12 10:26 dev/\ndrwxr-xr-x  34 root     root         4096 Jul 12 10:25 etc/\n^\n<span class="token comment"># the first column is the file type </span>\n<span class="token comment"># d = directory</span>\n<span class="token comment"># f = file</span>\n\n<span class="token comment"># List the directories in the current directory:</span>\n$ <span class="token function">ls</span> -d */\n\n<span class="token comment"># list ALL subdirectories</span>\n$ <span class="token function">ls</span> *\n<span class="token comment"># The default behavior of ls is to only pass color control codes to tty output --color=auto.</span>\n<span class="token comment"># To pipe the output to a second command complete with color codes then set --color=always</span>\n\n$ <span class="token function">ls</span> -lAXh --color<span class="token operator">=</span>auto<span class="token operator">|</span><span class="token function">less</span> -R\n</code></pre>\n      </div>\n</details>\n<details>\n<summary>mkdir</summary>\n<h2>NAME</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>mkdir - make directories</code></pre>\n      </div>\n<h2>DESCRIPTION</h2>\n<p>Create the DIRECTORY(ies), if they do not already exist.</p>\n<p>Mandatory  arguments  to  long  options are mandatory for short options\ntoo.</p>\n<h2>SYNTAX</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ <span class="token function">mkdir</span> <span class="token punctuation">[</span>Options<span class="token punctuation">]</span> folder<span class="token punctuation">..</span>.\n\n$ <span class="token function">mkdir</span> <span class="token string">"Name with spaces"</span>\n</code></pre>\n      </div>\n<h2>OPTIONS</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>-m, --mode=MODE   set permission mode (as in chmod), not rwxrwxrwx - umask\n-p, --parents     no error if existing, make parent directories as needed\n-v, --verbose     print a message for each created directory</code></pre>\n      </div>\n</details>\n<details>\n<summary>touch</summary>\n<h2>NAME</h2>\n<p>touch - change file timestamps</p>\n<h2>DESCRIPTION</h2>\n<p>Update the access and modification times of each FILE to the current time.</p>\n<p>A FILE argument that does not exist is created empty, unless -c  or  -h is supplied.</p>\n<p>A  FILE argument string - is handled specially and causes touch to change the times of the file associated with standard output.</p>\n<h2>SYNTAX</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ <span class="token function">touch</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span><span class="token punctuation">..</span>. File<span class="token punctuation">..</span>.\n</code></pre>\n      </div>\n<h2>OPTIONS</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>-a, change only the access time\n\n-c, --no-create, do not create any files\n\n-d, --date=STRING, parse STRING and use it instead of current time\n\n-f, (ignored)\n\n-h, --no-dereference, affect each symbolic link instead of any referenced file (useful only on systems that can change the timestamps of a symlink)\n\n-m, change only the modification time\n\n-r, --reference=FILE, use this file\'s times instead of current time\n\n-t STAMP, use [[CC]YY]MMDDhhmm[.ss] instead of current time\n\n--time=WORD, change the specified  time:  WORD  is  access,  atime,  or  use: \nequivalent to -a WORD is modify or mtime: equivalent to -m\n\n--help display this help and exit\n\n--version,  output version information and exit</code></pre>\n      </div>\n<p>Note that the -d and -t options accept different time-date formats.</p>\n<h2>DATE STRING</h2>\n<p>The  —date=STRING  is  a mostly free format human readable date string\nsuch as “Sun, 29 Feb 2004 16:21:42 -0800” or “2004-02-29  16:21:42”  or\neven  “next  Thursday”.</p>\n<p>A date string may contain items indicating calendar date, time of day, time zone, a day of the week, relative time, relative date, and numbers. </p>\n<p>An empty string indicates the beginning of\nthe day. </p>\n<p>The date  string  format  is  more  complex  than  is  easily\ndocumented here but is fully described in the info documentation.</p>\n</details>\n<details>\n<summary>cp</summary>\n<h2>NAME</h2>\n<p>cp - copy files and directories</p>\n<h2>DESCRIPTION</h2>\n<p>Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.</p>\n<h2>SYNTAX</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">cp</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>-T<span class="token punctuation">]</span> SOURCE DEST\n<span class="token function">cp</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. SOURCE<span class="token punctuation">..</span>. DIRECTORY\n<span class="token function">cp</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. -t DIRECTORY SOURCE<span class="token punctuation">..</span>.\n</code></pre>\n      </div>\n<h2>OPTIONS</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>-b, make a backup of each existing destination file\n-f, --force\nif an existing destination file cannot be opened, remove it  and\ntry  again  (this  option  is ignored when the -n option is also\nused)\n-i, --interactive\nprompt before overwrite (overrides a previous -n option)\n-l, --link\nhard link files instead of copying\n-n, --no-clobber (VERY USEFUL)\ndo not overwrite an  existing  file  (overrides  a  previous  -i\noption)\n-p     same as --preserve=mode,ownership,timestamps\n\n--preserve[=ATTR_LIST]\npreserve       the      specified      attributes      (default:\nmode,ownership,timestamps), if possible  additional  attributes:\ncontext, links, xattr, all\n\n--no-preserve=ATTR_LIST\ndon\'t preserve the specified attributes\n-R, -r, --recursive\ncopy directories recursively\n-u, --update\ncopy only when the SOURCE file is  newer  than  the  destination\nfile or when the destination file is missing\n-v, --verbose\nexplain what is being done</code></pre>\n      </div>\n<h2>EXAMPLES</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token comment"># Copy the file</span>\n$ <span class="token function">ls</span>\nfoo.txt\n$ <span class="token function">cp</span> foo.txt bar.txt\n$ <span class="token function">ls</span>\nfoo.txt bar.txt\n\n<span class="token comment"># Copy multiple files</span>\n$ tree -F\n<span class="token keyword">.</span>\n├── bar.txt\n├── baz.txt\n├── foo/\n└── foo.txt\n$ <span class="token function">cp</span> foo.txt bar.txt baz.txt foo/\n$ tree <span class="token keyword">.</span>\n<span class="token keyword">.</span>\n├── bar.txt\n├── baz.txt\n├── foo\n│   ├── bar.txt\n│   ├── baz.txt\n│   └── foo.txt\n└── foo.txt\n\n<span class="token comment"># The same operation can also be achieved through pattern matching</span>\n$ <span class="token function">cp</span> *.txt foo/\n\n<span class="token comment"># Copy the directory</span>\n$ <span class="token function">cp</span> -R directory/ foo\n\n<span class="token comment"># Copy multiple directories</span>\n$ tree <span class="token keyword">.</span>\n<span class="token keyword">.</span>\n├── bar\n│   └── bar.txt\n├── baz\n│   └── baz.txt\n├── foo\n│   └── foo.txt\n└── some-directory\n$ <span class="token function">cp</span> foo bar baz some-directory\n$ tree <span class="token keyword">.</span>\n<span class="token keyword">.</span>\n├── bar\n│   └── bar.txt\n├── baz\n│   └── baz.txt\n├── foo\n│   └── foo.txt\n└── some-directory\n    ├── bar\n    │   └── bar.txt\n    ├── baz\n    │   └── baz.txt\n    └── foo\n        └── foo.txt\n\n<span class="token comment"># Take a backup of a file</span>\n$ <span class="token function">ls</span> \nfoo.txt bar.txt\n$ <span class="token function">cp</span> -b foo.txt bar.txt\n$ <span class="token function">ls</span> \nfoo.txt bar.txt bar.txt~\n\n<span class="token comment"># Specify backup\'s extension</span>\n$ <span class="token function">ls</span> \nfoo.txt bar.txt\n$ <span class="token function">cp</span> -S .bak foo.txt bar.txt\n$ <span class="token function">ls</span> \nfoo.txt bar.txt bar.txt.bak\n$ <span class="token function">ls</span>\nfoo.txt bar.txt bar.txt.bak\n\n<span class="token comment"># How to prompt for confirmation to overwrite file</span>\n$ <span class="token function">ls</span>\nfoo.txt bar.txt\n$ <span class="token function">cp</span> -i foo.txt bar.txt\ncp: overwrite <span class="token string">\'bar.txt\'</span>? \n\n<span class="token comment"># Create hard link instead of copying</span>\n$ <span class="token function">ls</span> \nfoo.txt\n$ <span class="token function">cat</span> foo.txt\nfoo text\n$ <span class="token function">cp</span> -l foo.txt bar.txt\n$ <span class="token keyword">echo</span> <span class="token string">\'bar text\'</span> <span class="token operator">></span> bar.txt\n$ <span class="token function">cat</span> foo.txt\nbar text\n\n<span class="token comment"># Copy with preserving file attributes</span>\n$ <span class="token function">ls</span> -la\n-rw------- 1 myUser <span class="token function">users</span> 0 Oct 13 09:14 foo.txt\n$ <span class="token function">cp</span> --preserve foo.txt bar.txt\n-rw-------  1 myUser <span class="token function">users</span>     0 Oct 13 09:14 bar.txt\n-rw-------  1 myUser <span class="token function">users</span>     0 Oct 13 09:14 foo.txt\n\n<span class="token comment"># Showing files that are being copied</span>\n$ <span class="token function">cp</span> -R -v foo bar\n<span class="token string">\'foo\'</span> -<span class="token operator">></span> <span class="token string">\'bar\'</span>\n<span class="token string">\'foo/foo.txt\'</span> -<span class="token operator">></span> <span class="token string">\'bar/foo.txt\'</span>\n<span class="token string">\'foo/bar.txt\'</span> -<span class="token operator">></span> <span class="token string">\'bar/bar.txt\'</span>\n</code></pre>\n      </div>\n</details>\n<details>\n<summary>rm</summary>\n<h2>NAME</h2>\n<p>rm - remove files or directories</p>\n<h2>DESCRIPTION</h2>\n<p>rm removes each specified file.  By default, it does not remove directories.</p>\n<h2>SYNTAX</h2>\n<p>rm [OPTION]… [FILE]…</p>\n<h2>OPTIONS</h2>\n<p>Remove (unlink) the FILE(s).</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>-f, --force, ignore nonexistent files and arguments, never prompt\n\n-i, prompt before every removal\n\n--no-preserve-root, do not treat \'/\' specially.\nYou don\'t need this unless you want to delete your OS (believe me, you don\'t)\n\n--preserve-root, do not remove \'/\' (default)\n\n-r, -R, --recursive, remove directories and their contents recursively\n\n-d, --dir, remove empty directories\n\n-v, --verbose, explain what is being done</code></pre>\n      </div>\n<h2>EXAMPLES</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token comment"># Removing a file</span>\n$ <span class="token function">ls</span>\nfoo.txt bar.txt\n$ <span class="token function">rm</span> foo.txt\n$ <span class="token function">ls</span>\nbar.txt\n\n<span class="token comment"># Removing multiple files</span>\n$ <span class="token function">ls</span> \nfoo.txt bar.txt\n$ <span class="token function">rm</span> foo.txt bar.txt\n$ <span class="token function">ls</span>\n\n<span class="token comment"># or using patterns</span>\n$ <span class="token function">ls</span>\nfoo.txt bar.txt baz.zip\n$ <span class="token function">rm</span> *.zip\n$ <span class="token function">ls</span>\nbaz.zip\n\n<span class="token comment"># Prompt for confirmation before removing smth</span>\n$ <span class="token function">ls</span> \nfoo.txt bar.txt\n$ <span class="token function">rm</span> -i foo.txt\nrm: remove regular <span class="token function">file</span> <span class="token string">\'foo.txt\'</span>?\n$ <span class="token function">ls</span> \nbar.txt\n\n<span class="token comment"># Show more information while removing smth</span>\n<span class="token function">ls</span> \nfoo.txt bar.txt\n<span class="token function">rm</span> -v foo.txt\nremoved <span class="token string">\'foo.txt\'</span>\n<span class="token function">ls</span> \nbar.txt\n\n<span class="token comment"># Removing directories, use ls -F to show directaries with / on the end</span>\n$ <span class="token function">ls</span> -F\nfoo.txt bar/\n$ <span class="token function">rm</span> -R bar/\n$ <span class="token function">ls</span> -F \nfoo.txt\n\n<span class="token comment"># If you get permission denied, you most probably have to use sudo</span>\n$ <span class="token function">sudo</span> <span class="token function">rm</span> ~/Documents/smth.txt\n\n<span class="token comment"># If you try to delete write-protected files, you\'ll be prompted for confirmation like this:</span>\n<span class="token function">rm</span> foo\nrm: remove write-protected regular empty <span class="token function">file</span> <span class="token string">\'foo\'</span>? y\n<span class="token comment"># If you don\'t want the system to show this message, do force removal:</span>\n<span class="token function">rm</span> -f foo\n<span class="token comment"># Also NEVER USE THIS COMMAND</span>\n<span class="token comment"># NEVER, IT DELETES ALL FILES ON YOUR MACHINE</span>\n<span class="token function">rm</span> -rf /\n</code></pre>\n      </div>\n</details>\n<details>\n<summary>mv</summary>\n<h2>NAME</h2>\n<p>mv - move (rename) files</p>\n<h2>DESCRIPTION</h2>\n<p>Rename SOURCE to DEST, or move SOURCE(s) to DIRECTORY.</p>\n<h2>SYNTAX</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">mv</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. <span class="token punctuation">[</span>-T<span class="token punctuation">]</span> SOURCE DEST\n<span class="token function">mv</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. SOURCE<span class="token punctuation">..</span>. DIRECTORY\n<span class="token function">mv</span> <span class="token punctuation">[</span>OPTION<span class="token punctuation">]</span><span class="token punctuation">..</span>. -t DIRECTORY SOURCE<span class="token punctuation">..</span>.\n</code></pre>\n      </div>\n<h2>OPTIONS</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>-b, <span class="token function">make</span> a backup of each existing destination <span class="token function">file</span>\n\n-f, --force\n<span class="token keyword">do</span> not prompt before overwriting\n                            \n-i, --interactive\nprompt before overwrite\n\n-n, --no-clobber\n<span class="token keyword">do</span> not overwrite an existing <span class="token function">file</span>\n\n-u, --update\nmove  only  when  the  SOURCE <span class="token function">file</span> is newer than the destination\n<span class="token function">file</span> or when the destination <span class="token function">file</span> is missing\n\n-v, --verbose\nexplain what is being <span class="token keyword">done</span>\n</code></pre>\n      </div>\n<h2>EXAMPLES</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token comment"># Move a file</span>\n$ <span class="token function">ls</span>\nfoo.txt\n$ <span class="token function">mv</span> foo.txt bar.txt\n$ <span class="token function">ls</span> \nbar.txt\n\n<span class="token comment"># Move file in a directory</span>\n$ tree -F <span class="token keyword">.</span>\n<span class="token keyword">.</span>\n├── bar/\n└── foo.txt\n$ <span class="token function">mv</span> foo.txt bar\n$ tree -F \n<span class="token keyword">.</span>\n└── bar/\n    └── foo.txt\n\n<span class="token comment"># Move multiple files into a directory</span>\n$ <span class="token function">mv</span> file1.txt file.2.txt file3.txt folder\n<span class="token comment"># Or</span>\n$ <span class="token function">mv</span> *.txt folder\n\n<span class="token comment"># Move a directory, use ls -F to list directories with/on the end</span>\n$ <span class="token function">ls</span> -F \nfoo/\n$ <span class="token function">mv</span> foo bar\n$ <span class="token function">ls</span> -F\nbar/\n\n<span class="token comment"># Prompt before overwriting the file</span>\n$ <span class="token function">ls</span> \nfoo.txt bar.txt\n$ <span class="token function">mv</span> -i foo.txt bar.txt\nmv: overwrite <span class="token string">\'bar.txt\'</span>?\n\n<span class="token comment"># How not to overwrite existing files</span>\n$ <span class="token function">ls</span> \nfoo.txt bar.txt\n$ <span class="token function">mv</span> -n foo.txt bar.txt\n$ <span class="token function">ls</span>\nfoo.txt bar.txt\n\n<span class="token comment"># Making a backup of an existing file</span>\n$ <span class="token function">ls</span> \nfoo.txt bar.txt\n$ <span class="token function">mv</span> -b foo.txt bar.txt\n$ <span class="token function">ls</span>\nbar.txt  bar.txt~\n\n<span class="token comment"># To change the backup extension do:</span>\n$ <span class="token function">ls</span>\nfoo.txt bar.txt\n$ <span class="token function">mv</span> -S .bak -b foo.txt bar.txt\n$ <span class="token function">ls</span>\nbar.txt  bar.txt.bak\n</code></pre>\n      </div>\n</details>\n<details>\n<summary>nano</summary>\n<h2>NAME</h2>\n<p>nano - Nano’s ANOther editor, an enhanced free Pico clone</p>\n<h2>DESCRIPTION</h2>\n<p>nano is a  small and friendly editor.</p>\n<h2>SYNTAX</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">nano</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>+line<span class="token punctuation">[</span>,column<span class="token punctuation">]</span><span class="token punctuation">]</span> file<span class="token punctuation">]</span><span class="token punctuation">..</span>.\n</code></pre>\n      </div>\n<h2>REFERENCE</h2>\n<p>Ubuntu man pages: <a href="http://manpages.ubuntu.com/manpages/artful/en/man1/nano.1.html">http://manpages.ubuntu.com/manpages/artful/en/man1/nano.1.html</a></p>\n</details>\n<details>\n<summary>cat</summary>\n<h2>NAME</h2>\n<p>cat - concatenate files and print on the standard output</p>\n<h2>DESCRIPTION</h2>\n<p>Concatenate FILE(s) to standard output.\nWith no FILE, or when FILE is -, read standard input.</p>\n<h2>OPTIONS</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>-A, --show-all\nequivalent to -vET\n\n-E, --show-ends\ndisplay $ at end of each line\n\n-n, --number\nnumber all output lines\n\n-s, --squeeze-blank\nsuppress repeated empty output lines\n\n-T, --show-tabs\ndisplay TAB characters as ^I\n\n-v, --show-nonprinting\nuse ^ and M- notation, except for LFD and TAB</code></pre>\n      </div>\n<h2>EXAMPLES</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token comment"># Show contents of file</span>\n$ <span class="token function">cat</span> foo.txt\nHello world\n\n<span class="token comment"># How to write contents of one file to another one</span>\n$ <span class="token function">cat</span> foo.txt <span class="token operator">></span> bar.txt\n$ <span class="token function">cat</span> bar.txt\nHello world\n\n<span class="token comment"># To append the contents of one file to another, use:</span>\n$ <span class="token function">cat</span> wine.txt <span class="token operator">>></span> beer.txt\n$ <span class="token function">cat</span> beer.txt\n\n<span class="token comment"># Combine contents of few files into one:</span>\n$ <span class="token function">cat</span> *.txt <span class="token operator">></span> combined.txt\n\n<span class="token comment"># To add line numbers to the output use -n:</span>\n<span class="token function">cat</span> -n foot.txt\n     1  asd\n     2  asdgfasdg\n     3  adgd\n     4    adfsd\n         <span class="token punctuation">..</span>.\n\n<span class="token comment"># Show end of lines using -E</span>\n$ <span class="token function">cat</span> -E example.txt\nThis line has no space at the end.$\nThis one does. $\n\n<span class="token comment"># To squeze repeatable blank lines use -s:</span>\n<span class="token function">cat</span> blanks.txt\nLine one\n\nLine two\n\n\nLine three\n<span class="token function">cat</span> -s blanks.txt\nLine one\n\nLine two\n\nLine three\n\n<span class="token comment"># Show tabs in the file</span>\n<span class="token function">cat</span> -T tabs.txt\n^IOne Tab\n^I^ITwo tabs\n^I^I^IThree tabs\n</code></pre>\n      </div>\n</details>\n<details>\n<summary>less</summary>\n<h2>NAME</h2>\n<p>less - opposite of more</p>\n<h2>DESCRIPTION</h2>\n<p>Less is a program similar to more (1), but it has many more features.</p>\n<p>Less  does  not  have to read the entire input file before starting, so\nwith large input files, it starts up faster than text  editors  like  vi</p>\n<h2>SYNTAX</h2>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>less [-[+]aABcCdeEfFgGiIJKLmMnNqQrRsSuUVwWX~]\n            [-b space] [-h lines] [-j line] [-k keyfile]\n            [-{oO} logfile] [-p pattern] [-P prompt] [-t tag]\n            [-T tagsfile] [-x tab,...] [-y lines] [-[z] lines]\n            [-# shift] [+[+]cmd] [--] [filename]...</code></pre>\n      </div>\n<h2>REFERENCE</h2>\n<p>Ubuntu man pages: <a href="http://manpages.ubuntu.com/manpages/artful/en/man1/less.1.html">http://manpages.ubuntu.com/manpages/artful/en/man1/less.1.html</a></p>\n</details>\n<details>\n<summary>apt-get</summary>\n</details>\n<details>\n<summary>man</summary>\n</details>\n<!-- <details>\n<summary>sl</summary>\n</details> -->\nSpecial thanks to: https://shapeshed.com/\n<h2>Lecture notes:</h2>\n<h3>cd</h3>\n<p>cd - Change Directory</p>\n<p>This command lets you navigate through your filesystem directories.</p>\n<p>First, Let’s open the terminal and try this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">cd</span> ~\n</code></pre>\n      </div>\n<p>Now we are in the user’s home directory.</p>\n<p>Let’s go to the Documents directory!</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">cd</span> Documents/\n</code></pre>\n      </div>\n<p>And then back to the home directory using <code>..</code> (parent directory is <code>..</code>, all directories have it)</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">cd</span> <span class="token punctuation">..</span>\n</code></pre>\n      </div>\n<p>or the command that basically means undo the previous cd:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">cd</span> -\n</code></pre>\n      </div>\n<h3>pwd</h3>\n<p>Okay, we know how to travel in the filesystem,\nbut every traveler should have their own compass!</p>\n<p>This command (!compass!) lets you see where you are now in the filesystem</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">pwd</span>\n</code></pre>\n      </div>\n<p>the output should be something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>/Users/myUsername/Documents\n</code></pre>\n      </div>\n<h3>ls</h3>\n<p>YAS! Now we, as travelers, should sense everything that is near us!</p>\n<p>For that reason, we will use command <code>ls</code>. It lets us find out what is in the current directory!</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">ls</span>\n</code></pre>\n      </div>\n<h3>mkdir</h3>\n<p>We’ve got a long trip in this OS, thus we need to prepare some place to store our stuff!</p>\n<p>We are going to create a directory and <code>mkdir</code> command will help us!</p>\n<p>Let’s create a new directory in <code>~/Documents</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">cd</span> ~/Documents\n<span class="token function">mkdir</span> MyDirectoryName\n</code></pre>\n      </div>\n<h3>touch</h3>\n<p>We’ve created a directory and now let’s create a file in MyDirectoryName!</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">cd</span> MyDirectoryName\n<span class="token function">touch</span> myCustomFile.js\n</code></pre>\n      </div>\n<h3>cp</h3>\n<p>Copying code is something that every developer should know on the professional level!</p>\n<p>Now we have to prepare our workspace for that amazing command!</p>\n<p>Let’s go back to the parent’s directory and create one more directory</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">cd</span> <span class="token punctuation">..</span>\n<span class="token function">mkdir</span> MyPrettyDirectory\n</code></pre>\n      </div>\n<p>Here is the fan part! Let’s copy the file <code>myCustomFile.js</code> from <code>MyDirectoryName</code> to <code>MyPrettyDirectory</code> using this command:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">cp</span> MyDirectoryName/myCustomFile.js MyPrettyDirectory/\n</code></pre>\n      </div>\n<p>So now we have a file called <code>myCustomFile.js</code> in both <code>MyDirectoryName</code> and <code>MyPrettyDirectory</code> directories! Voila!</p>\n<h3>rm</h3>\n<p>Oh, we did the copy of the file by mistake?! We need to delete the second file right now! The <code>rm</code> command is going to save us all! So we should be in the <code>~/Documents</code> directory now!</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">rm</span> MyPrettyDirectory/myCustomFile.js\n</code></pre>\n      </div>\n<p>whew, we’ve deleted this unnecessary file!</p>\n<h3>mv</h3>\n<p>What if we didn’t want to actually copy it, we wanted to move the file from one directory to another (something like cut &#x26; paste!!!). Again, I’m assuming that we are currently in the <code>~/Documents</code> directory.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">mv</span> MyDirectoryName/myCustomFile.js MyPrettyDirectory/\n</code></pre>\n      </div>\n<p>So now we don’t have anything in <code>MyDirectoryName</code> and have <code>myCustomFile.js</code> in <code>MyPrettyDirectory</code></p>\n<h3>nano</h3>\n<p>Every programmer should be able to write code, right?!</p>\n<p>nano is a small and friendly editor, it’s going to help us write our first\n(well, maybe not) lines of Javascript!</p>\n<p>So now <code>myCustomFile.js</code> file is in the <code>MyPrettyDirectory</code> directory. Let’s open it with <code>nano</code>!</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">nano</span> MyPrettyDirectory/myCustomFile.js\n</code></pre>\n      </div>\n<p>Wow, this may seem confusing! But it’s much simpler than it seems!</p>\n<p>Here we can edit the file. Let’s add this line of code:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> year <span class="token operator">=</span> <span class="token number">2018</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Later in this course, you will understand what each of these characters means!</p>\n<p>Nice! Let’s save it and move on to another terminal command! Do this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>ctrl + X    # command for exiting nano\nY                 # it asks if you want to save changes or no\nenter            # submit your answer!</code></pre>\n      </div>\n<h3>cat</h3>\n<p>You are in the terminal and you want to read a small file without opening any editor?</p>\n<p>NOT A PROBLEM!</p>\n<p><code>cat</code> is going to help you! let’s go to <code>MyPrettyDirectory</code> from <code>~/Documents</code> directory with</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">cd</span> MyPrettyDirectory\n</code></pre>\n      </div>\n<p>And let’s print the content of <code>myCustomFile.js</code> to the terminal!</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">cat</span> myCustomFile.js\n</code></pre>\n      </div>\n<p>Voila :D </p>\n<h3>less</h3>\n<p>There is also another way of looking into file’s content! Try:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">less</span> myCustomFile.js\n</code></pre>\n      </div>\n<h3>apt-get</h3>\n<p>Now let’s learn a little bit about installing packages to your computer using the terminal!</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>apt-get install sl</code></pre>\n      </div>\n<h3>man</h3>\n<p>So if you want to find the manual for any built-in terminal command, you can run something like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">man</span> <span class="token function">cd</span>\n</code></pre>\n      </div>\n<p>Developers of Linux has written these manuals for you to learn without even using the internet!</p>\n<h3>sl</h3>\n<p>And now let’s try the package that we installed earlier :D</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>sl\n</code></pre>\n      </div>\n<hr>\n<p>Thanks for reading!</p>\n<p>Don’t forget that you can always reach members of the iterate community, ask questions, fix issues and bugs, also just talk about random things in the iterate Slack <a href="https://iterate-hackerspace.slack.com/messages">channel</a>.</p>',
frontmatter:{title:"Simple Terminal Commands",date:"February 06, 2018",discussionId:"2018-02-06-simple-terminal-commands"}}},pathContext:{slug:"/2018-02-06-simple-terminal-commands/"}}}});
//# sourceMappingURL=path---2018-02-06-simple-terminal-commands-af3dd31f21dfa1bbddeb.js.map