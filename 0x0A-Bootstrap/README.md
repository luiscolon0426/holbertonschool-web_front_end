**_Learning Objectives_**
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- ARIA’s main purpose
- WCAG conformance levels (A, AA and AAA)
- The importance of Web Accessibility
- Tools to use for Web Accessibility

<article class="">



<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="https://getbootstrap.com/docs/4.4/getting-started/introduction/" title="Bootstrap" target="_blank">Bootstrap</a> </li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/TecYqchNia4JMXrIYs3bYA" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<h3>General</h3>

<ul>
<li>Usage of Containers</li>
<li>Usage of the Grid system</li>
<li>Usage of Components</li>
<li>Usage of Utilities</li>
</ul>

<h2>Requirements</h2>

<h3>General</h3>

<ul>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Use Bootstrap version 4.4.1</li>
</ul>

<h2>Use the CDN version</h2>

<p>Add this <code>&lt;link&gt;</code> in the <code>&lt;head&gt;</code> part of your HTML</p>

<pre><code>&lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"&gt;
</code></pre>

  </div>
</div>

          <h2 class="gap">Tasks</h2>

    <div data-role="task4781" data-position="1" id="task-num-0">
      <div class="panel panel-default task-card " id="task-4781">

<span id="user_id" data-id="3559"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Reboot styling
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>

  </div>

  <div class="panel-body">
    <span id="user_id" data-id="3559"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>From this HTML:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en" dir="ltr"&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"&gt;
        &lt;title&gt;Holberton - Web Stack - Bootstrap&lt;/title&gt;
        &lt;meta name="description" content="Bootstrap is a free and open-source CSS framework"&gt;

        &lt;style&gt;
            .my-container {
                background-color: #FF0000;
            }
        &lt;/style&gt;
    &lt;/head&gt;
    &lt;body&gt;

        &lt;div class="my-container"&gt;
            &lt;h1&gt;Hello&lt;/h1&gt;
            &lt;h2&gt;Holberton&lt;/h2&gt;
            &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat eleifend nulla, quis imperdiet lacus. Donec tempor lorem enim, sit amet tempus purus euismod sit amet. Nam laoreet quis purus a consequat. Quisque interdum bibendum varius. Praesent lobortis eros sit amet tortor varius elementum. Fusce eget varius ex. Cras id lectus consectetur, bibendum dolor in, hendrerit lacus. Praesent rutrum, odio id tincidunt fringilla, dolor eros condimentum lacus, blandit molestie massa velit hendrerit risus. Nam ex nunc, ultrices id nisi consectetur, mattis imperdiet purus. Sed tempus ullamcorper nisi, vitae pulvinar nunc varius eu. Maecenas ut volutpat lectus.&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/li&gt;
                &lt;li&gt;Phasellus quis dolor sed ligula porttitor fringilla.&lt;/li&gt;
                &lt;li&gt;
                    &lt;ul&gt;
                        &lt;li&gt;Integer vulputate arcu quis luctus condimentum.&lt;/li&gt;
                        &lt;li&gt;Integer commodo turpis non ligula viverra, ut sagittis elit ornare.&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/li&gt;
                &lt;li&gt;Etiam porttitor justo in diam elementum, nec mollis tellus viverra.&lt;/li&gt;
                &lt;li&gt;Vivamus non ligula quis dui auctor sagittis.&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/div&gt;

    &lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>Add Bootstrap to reset the CSS styling.</p>

<p>Your final page must look like this:</p>

<p><img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/0b67c90b07246a25d1f8.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220818%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220818T191111Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=63d79b56d59be27551537c3230bb5042d40ad984787108ae5f440975b05ae8d8" alt="" style=""></p>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_front_end</code></li>
            <li>Directory: <code>0x0A-Bootstrap</code></li>
            <li>File: <code>0-index.html</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->

  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="4781">
      <span class="no"><i aria-hidden="true" class="fa fa-square-o "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa fa-check-square-o "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa fa-spinner  fa-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="4781" data-batch-id="119" data-toggle="modal" data-target="#task-4781-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-4781-users-done-modal" data-task-id="4781" data-batch-id="119">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "0. Reboot styling"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>

</div>

        <div class="fs-4">
        </div>
      </div>

  </div>
</div>

    </div>
    <div data-role="task4797" data-position="3" id="task-num-1">
      <div class="panel panel-default task-card " id="task-4797">

<span id="user_id" data-id="3559"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Blocks
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>

  </div>

  <div class="panel-body">
    <span id="user_id" data-id="3559"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>From this HTML:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en" dir="ltr"&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"&gt;
        &lt;title&gt;Holberton - Web Stack - Bootstrap&lt;/title&gt;
        &lt;meta name="description" content="Bootstrap is a free and open-source CSS framework"&gt;

        &lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div&gt;
            &lt;div&gt;Primary&lt;/div&gt;
            &lt;div&gt;Success&lt;/div&gt;
            &lt;div&gt;Danger&lt;/div&gt;
            &lt;div&gt;Warning&lt;/div&gt;
        &lt;/div&gt;

        &lt;hr /&gt;

        &lt;div&gt;
            &lt;div&gt;Primary&lt;/div&gt;
            &lt;div&gt;Success&lt;/div&gt;
            &lt;div&gt;Danger&lt;/div&gt;
            &lt;div&gt;Warning&lt;/div&gt;
        &lt;/div&gt;

        &lt;hr /&gt;

        &lt;div&gt;
            &lt;div&gt;Primary&lt;/div&gt;
            &lt;div&gt;Success&lt;/div&gt;
            &lt;div&gt;Danger&lt;/div&gt;
        &lt;/div&gt;

        &lt;hr /&gt;

        &lt;div&gt;
            &lt;div&gt;Primary&lt;/div&gt;
            &lt;div&gt;Success&lt;/div&gt;
            &lt;div&gt;Danger&lt;/div&gt;
            &lt;div&gt;Warning&lt;/div&gt;
        &lt;/div&gt;

        &lt;hr/&gt;

        &lt;div&gt;
            &lt;div&gt;Primary&lt;/div&gt;
            &lt;div&gt;Success&lt;/div&gt;
        &lt;/div&gt;

        &lt;hr/&gt;

        &lt;div&gt;
            &lt;div&gt;Primary&lt;/div&gt;
            &lt;div&gt;Success&lt;/div&gt;
            &lt;div&gt;Danger&lt;/div&gt;
        &lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>Build this responsive web page:</p>

<p><img src="https://intranet-projects-files.s3.amazonaws.com/holbertonschool-webstack/623/1-index.gif" alt="" style=""></p>

<p><strong>Requirements:</strong></p>

<ul>
<li>You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes</li>
<li>You can not change the HTML structure - only adding classes is allowed</li>
</ul>

<p><strong>Behaviors/styles:</strong></p>

<p>For all cells of all rows:</p>

<ul>
<li>Padding at <code>.5rem</code></li>
<li>Background color of the name of the cell</li>
<li>Text centered and white</li>
</ul>

<p><strong>First line:</strong></p>

<ul>
<li>Each cell has the same width</li>
<li>Screen &gt;= 992px: display like 4 columns in one line</li>
<li>Screen &lt; 992px: display like 4 lines in one column</li>
</ul>

<p><strong>Second line:</strong></p>

<ul>
<li>Each cell has the same width</li>
<li>Screen &gt;= 576px: display like 4 columns in one line</li>
<li>Screen &lt; 576px: display like 4 lines in one column</li>
</ul>

<p><strong>Third line:</strong></p>

<ul>
<li>The last cell is taking 50% of the width screen</li>
<li>The middle cell has 2 times the size of the first cell</li>
<li>Screen &gt;= 992px: display like 3 columns in one line</li>
<li>Screen &lt; 992px: display like 3 lines in one column</li>
</ul>

<p><strong>Fourth line:</strong></p>

<ul>
<li>Different order (from left to right) based on the size</li>
<li>Screen &gt;= 1200px: Primary -&gt; Success -&gt; Danger -&gt; Warning</li>
<li>Screen between 992px and 1200px: Warning -&gt; Primary -&gt; Success -&gt; Danger</li>
<li>Screen between 768px and 992px: Danger -&gt; Warning -&gt; Primary -&gt; Success</li>
<li>Screen &lt;= 768px: Success -&gt; Danger -&gt; Warning -&gt; Primary</li>
</ul>

<p><strong>Fifth line:</strong></p>

<ul>
<li>Each cell has the same width (~16% of the screen)</li>
<li>Screen &gt;= 768px: display like 2 columns on each side of the screen in one line</li>
<li>Screen &lt; 768px: display like 2 lines in one column</li>
</ul>

<p><strong>Last line:</strong></p>

<ul>
<li>Each cell has the same width (~16% of the screen)</li>
<li>Screen &gt;= 768px: display like 3 columns in one line with the space between the first and middle cell 2 times bigger than the space between the middle cell and the last cell</li>
<li>Screen &lt; 768px: display like 3 lines in one column</li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_front_end</code></li>
            <li>Directory: <code>0x0A-Bootstrap</code></li>
            <li>File: <code>1-index.html</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->

  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="4797">
      <span class="no"><i aria-hidden="true" class="fa fa-square-o "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa fa-check-square-o "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa fa-spinner  fa-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="4797" data-batch-id="119" data-toggle="modal" data-target="#task-4797-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-4797-users-done-modal" data-task-id="4797" data-batch-id="119">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "1. Blocks"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>

</div>

        <div class="fs-4">
        </div>
      </div>

  </div>
</div>

    </div>
    <div data-role="task4798" data-position="4" id="task-num-2">
      <div class="panel panel-default task-card " id="task-4798">

<span id="user_id" data-id="3559"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Table of chemical elements
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>

  </div>

  <div class="panel-body">
    <span id="user_id" data-id="3559"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>From this HTML:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en" dir="ltr"&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"&gt;
        &lt;title&gt;Holberton - Web Stack - Bootstrap&lt;/title&gt;
        &lt;meta name="description" content="Bootstrap is a free and open-source CSS framework"&gt;

        &lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;header&gt;
            &lt;ul&gt;
                &lt;li&gt;
                    &lt;a href="/"&gt;
                        &lt;img src="https://via.placeholder.com/150x50" /&gt;
                    &lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href="#"&gt;Chemical elements&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a href="#"&gt;Profile&lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/header&gt;

        &lt;main&gt;
            &lt;section&gt;
                &lt;div role="alert"&gt;
                    &lt;h4&gt;List of chemical elements&lt;/h4&gt;
                    &lt;p&gt;This is a list of the 5 first chemical elements which have been identified as of 2019.&lt;/p&gt;
                    &lt;hr&gt;
                    &lt;p&gt;A popular visualization of all 118 elements is &lt;a href="https://en.wikipedia.org/wiki/Periodic_table"&gt;the periodic table of the elements&lt;/a&gt;.&lt;/p&gt;
                &lt;/div&gt;
            &lt;/section&gt;

            &lt;section&gt;
                &lt;h1&gt;Chemical elements &lt;span&gt;only 5&lt;/span&gt;&lt;/h1&gt;

                &lt;div&gt;
                    &lt;table&gt;
                        &lt;thead&gt;
                            &lt;tr&gt;
                                &lt;th scope="col"&gt;Atomic number&lt;/th&gt;
                                &lt;th scope="col"&gt;Symbol&lt;/th&gt;
                                &lt;th scope="col"&gt;Element&lt;/th&gt;
                                &lt;th scope="col"&gt;Origin of name&lt;/th&gt;
                                &lt;th scope="col"&gt;Group&lt;/th&gt;
                                &lt;th scope="col"&gt;Period&lt;/th&gt;
                                &lt;th scope="col"&gt;Atomic weight&lt;/th&gt;
                                &lt;th scope="col"&gt;Density&lt;/th&gt;
                                &lt;th scope="col"&gt;Melting point&lt;/th&gt;
                                &lt;th scope="col"&gt;Boiling point&lt;/th&gt;
                                &lt;th scope="col"&gt;Specific heat capacity&lt;/th&gt;
                                &lt;th scope="col"&gt;Electro­negativity&lt;/th&gt;
                                &lt;th scope="col"&gt;Abundance in Earth's crust&lt;/th&gt;
                            &lt;/tr&gt;
                        &lt;/thead&gt;
                        &lt;tbody&gt;
                            &lt;tr&gt;
                                &lt;td&gt;1&lt;/td&gt;
                                &lt;td&gt;H&lt;/td&gt;
                                &lt;td&gt;Hydrogen&lt;/td&gt;
                                &lt;td&gt;Greek elements &lt;i&gt;hydro-&lt;/i&gt; and &lt;i&gt;-gen&lt;/i&gt;, meaning 'water-forming'&lt;/td&gt;
                                &lt;td&gt;1&lt;/td&gt;
                                &lt;td&gt;1&lt;/td&gt;
                                &lt;td&gt;1.008&lt;/td&gt;
                                &lt;td&gt;0.00008988&lt;/td&gt;
                                &lt;td&gt;14.01&lt;/td&gt;
                                &lt;td&gt;20.28&lt;/td&gt;
                                &lt;td&gt;14.304&lt;/td&gt;
                                &lt;td&gt;2.20&lt;/td&gt;
                                &lt;td&gt;1400&lt;/td&gt;
                            &lt;/tr&gt;
                            &lt;tr&gt;
                                &lt;td&gt;2&lt;/td&gt;
                                &lt;td&gt;He&lt;/td&gt;
                                &lt;td&gt;Helium&lt;/td&gt;
                                &lt;td&gt;Greek &lt;i&gt;hḗlios&lt;/i&gt;, 'sun'&lt;/td&gt;
                                &lt;td&gt;18&lt;/td&gt;
                                &lt;td&gt;1&lt;/td&gt;
                                &lt;td&gt;4.002602&lt;/td&gt;
                                &lt;td&gt;0.0001785&lt;/td&gt;
                                &lt;td&gt;—&lt;/td&gt;
                                &lt;td&gt;4.22&lt;/td&gt;
                                &lt;td&gt;5.193&lt;/td&gt;
                                &lt;td&gt;–&lt;/td&gt;
                                &lt;td&gt;0.008&lt;/td&gt;
                            &lt;/tr&gt;
                            &lt;tr&gt;
                                &lt;td&gt;3&lt;/td&gt;
                                &lt;td&gt;Li&lt;/td&gt;
                                &lt;td&gt;Lithium&lt;/td&gt;
                                &lt;td&gt;Greek &lt;i&gt;líthos&lt;/i&gt;, 'stone'&lt;/td&gt;
                                &lt;td&gt;1&lt;/td&gt;
                                &lt;td&gt;2&lt;/td&gt;
                                &lt;td&gt;6.94&lt;/td&gt;
                                &lt;td&gt;0.534&lt;/td&gt;
                                &lt;td&gt;453.69&lt;/td&gt;
                                &lt;td&gt;1560&lt;/td&gt;
                                &lt;td&gt;3.582&lt;/td&gt;
                                &lt;td&gt;0.98&lt;/td&gt;
                                &lt;td&gt;20&lt;/td&gt;
                            &lt;/tr&gt;
                            &lt;tr&gt;
                                &lt;td&gt;4&lt;/td&gt;
                                &lt;td&gt;Be&lt;/td&gt;
                                &lt;td&gt;Beryllium&lt;/td&gt;
                                &lt;td&gt;Beryl, a mineral (ultimately from the name of Belur in southern India)&lt;/td&gt;
                                &lt;td&gt;2&lt;/td&gt;
                                &lt;td&gt;2&lt;/td&gt;
                                &lt;td&gt;9.0121831&lt;/td&gt;
                                &lt;td&gt;1.85&lt;/td&gt;
                                &lt;td&gt;1560&lt;/td&gt;
                                &lt;td&gt;2742&lt;/td&gt;
                                &lt;td&gt;1.825&lt;/td&gt;
                                &lt;td&gt;1.57&lt;/td&gt;
                                &lt;td&gt;2.8&lt;/td&gt;
                            &lt;/tr&gt;
                            &lt;tr&gt;
                                &lt;td&gt;5&lt;/td&gt;
                                &lt;td&gt;B&lt;/td&gt;
                                &lt;td&gt;Boron&lt;/td&gt;
                                &lt;td&gt;Borax, a mineral (from Arabic &lt;i&gt;bawraq&lt;/i&gt;)&lt;/td&gt;
                                &lt;td&gt;13&lt;/td&gt;
                                &lt;td&gt;2&lt;/td&gt;
                                &lt;td&gt;10.81&lt;/td&gt;
                                &lt;td&gt;2.34&lt;/td&gt;
                                &lt;td&gt;2349&lt;/span&gt;&lt;/td&gt;
                                &lt;td&gt;4200&lt;/td&gt;
                                &lt;td&gt;1.026&lt;/td&gt;
                                &lt;td&gt;2.04&lt;/td&gt;
                                &lt;td&gt;10&lt;/td&gt;
                            &lt;/tr&gt;
                        &lt;/tbody&gt;
                    &lt;/table&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/main&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>Build this responsive web page:</p>

<p><img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/21d4b4b1fe964a1918f2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220818%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220818T191111Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=af30b366d98ae15baabe5b8c62c6d9f1a0e6da2e970130846cf29786e0866972" alt="" style=""></p>

<p><img src="https://intranet-projects-files.s3.amazonaws.com/holbertonschool-webstack/623/2-index.gif" alt="" style=""></p>

<p><strong>Requirements:</strong></p>

<ul>
<li>You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes</li>
<li>You can not change the HTML structure - only adding classes is allowed</li>
</ul>

<p><strong>Behaviors/styles:</strong></p>

<ul>
<li>Header:

<ul>
<li>With border bottom</li>
<li>Padding <code>.5rem</code> and margin bottom <code>1rem</code></li>
<li>Background color “light”</li>
<li>Horizontal listing, no margin bottom:

<ul>
<li>First item aligned on the left with a border rounded image</li>
<li>2 other items aligned on the right with 2 links (aligned vertically in the middle) with a layout of a button of style “secondary” </li>
<li>The link “Chemical elements” is active</li>
</ul></li>
</ul></li>
<li>The <code>main</code> block has full width, spanning the entire width of the viewport</li>
<li>The first <code>section</code>:

<ul>
<li>The div inside is an alert of style “info”:

<ul>
<li><code>h4</code> is the header of this alert</li>
<li>The last paragraph (containing the link) should not have any margin bottom</li>
</ul></li>
</ul></li>
<li>The second <code>section</code>:

<ul>
<li><code>h1</code> has a margin bottom at <code>1.5rem</code> and margin top at <code>3rem</code></li>
<li>Inside the <code>h1</code>, “only 5” has a badge layout of type “info”</li>
<li>The <code>div</code> is able to make the <code>table</code> responsive with a break at <code>992px</code></li>
<li>The <code>table</code> has “dark” style and hover on rows</li>
</ul></li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_front_end</code></li>
            <li>Directory: <code>0x0A-Bootstrap</code></li>
            <li>File: <code>2-index.html</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->

  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="4798">
      <span class="no"><i aria-hidden="true" class="fa fa-square-o "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa fa-check-square-o "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa fa-spinner  fa-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="4798" data-batch-id="119" data-toggle="modal" data-target="#task-4798-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-4798-users-done-modal" data-task-id="4798" data-batch-id="119">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "2. Table of chemical elements"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>

</div>

        <div class="fs-4">
        </div>
      </div>

  </div>
</div>

    </div>
    <div data-role="task4799" data-position="5" id="task-num-3">
      <div class="panel panel-default task-card " id="task-4799">

<span id="user_id" data-id="3559"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Cards
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>

  </div>

  <div class="panel-body">
    <span id="user_id" data-id="3559"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>From this HTML:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en" dir="ltr"&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"&gt;
        &lt;title&gt;Holberton - Web Stack - Bootstrap&lt;/title&gt;
        &lt;meta name="description" content="Bootstrap is a free and open-source CSS framework"&gt;

        &lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"&gt;

        &lt;script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"&gt;&lt;/script&gt;
        &lt;script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div&gt;
            &lt;div&gt;
                &lt;div&gt;
                    &lt;div&gt;
                        &lt;div&gt;Coding&lt;/div&gt;
                        &lt;img src="https://via.placeholder.com/450x200" /&gt;
                        &lt;div&gt;
                            &lt;h5&gt;HTML&lt;/h5&gt;
                            &lt;p&gt;Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.&lt;/p&gt;
                            &lt;button data-toggle="modal" data-target="#playModal"&gt;Play with&lt;/button&gt;
                        &lt;/div&gt;
                        &lt;div&gt;40h&lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;div&gt;
                        &lt;div&gt;Coding&lt;/div&gt;
                        &lt;img src="https://via.placeholder.com/450x200" /&gt;
                        &lt;div&gt;
                            &lt;h5&gt;CSS&lt;/h5&gt;
                            &lt;p&gt;Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.&lt;/p&gt;
                            &lt;button data-toggle="modal" data-target="#playModal"&gt;Play with&lt;/button&gt;
                        &lt;/div&gt;
                        &lt;div&gt;35h&lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div&gt;
                    &lt;div&gt;
                        &lt;div&gt;Coding&lt;/div&gt;
                        &lt;img src="https://via.placeholder.com/450x200" /&gt;
                        &lt;div&gt;
                            &lt;h5&gt;Javascript&lt;/h5&gt;
                            &lt;p&gt;JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.&lt;/p&gt;
                            &lt;button data-toggle="modal" data-target="#playModal"&gt;Play with&lt;/button&gt;
                        &lt;/div&gt;
                        &lt;div&gt;70h&lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;

        &lt;!-- Modal --&gt;
        &lt;div id="playModal" tabindex="-1" role="dialog" aria-labelledby="playModal" aria-hidden="true"&gt;
            &lt;div role="document"&gt;
                &lt;div&gt;
                    &lt;div&gt;
                        &lt;h5 id="exampleModalLabel"&gt;Play with CodePen&lt;/h5&gt;
                        &lt;button type="button" data-dismiss="modal" aria-label="Close"&gt;
                            &lt;span aria-hidden="true"&gt;&amp;times;&lt;/span&gt;
                        &lt;/button&gt;
                    &lt;/div&gt;
                    &lt;div&gt;
                        &lt;p&gt;
                            CodePen is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets. 
                            It functions as an online code editor and open-source learning environment, where developers can create code snippets, called "pens," and test them.
                        &lt;/p&gt;
                        &lt;p&gt;
                            It was founded in 2012 by full-stack developers Alex Vazquez and Tim Sabat and front-end designer Chris Coyier.
                            Its employees work remotely, rarely all meeting together in person. 
                        &lt;/p&gt;
                        &lt;p&gt;
                            CodePen is one of the largest communities for web designers and developers to showcase their coding skills, with an estimated 330,000 registered users and 14.16 million monthly visitors.
                        &lt;/p&gt;

                        &lt;form&gt;
                            &lt;div&gt;
                                &lt;h5&gt;Connect&lt;/h5&gt;
                            &lt;/div&gt;
                            &lt;div&gt;
                                &lt;label for="username"&gt;Username&lt;/label&gt;
                                &lt;div&gt;
                                    &lt;input type="text" id="username" /&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                            &lt;div&gt;
                                &lt;label for="passowrd"&gt;Password&lt;/label&gt;
                                &lt;div&gt;
                                    &lt;input type="password" id="passowrd" /&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                            &lt;div&gt;
                                &lt;button type="submit"&gt;Connect&lt;/button&gt;
                            &lt;/div&gt;
                        &lt;/form&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>Build this responsive web page:</p>

<p><img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/6e564c36491cda7c0540.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220818%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220818T191111Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=1a1952abc79d2c77b0c3afef1495986cacf62f98f7a38ef91faa42c56c3bb9ad" alt="" style=""></p>

<p><img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/272ce037250ea75212d5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220818%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220818T191111Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=3eb6f791094b2edb0d05b4bd54daeb0be2f8e5e804744c895a1cbdd8b706de44" alt="" style=""></p>

<p><img src="https://intranet-projects-files.s3.amazonaws.com/holbertonschool-webstack/623/3-index.gif" alt="" style=""></p>

<p><strong>Requirements:</strong></p>

<ul>
<li>You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes</li>
<li>You can not change the HTML structure - only adding classes is allowed</li>
</ul>

<p><strong>Behaviors/styles:</strong></p>

<ul>
<li>The first <code>div</code> is a container with a break at <code>992px</code> and padding of <code>3rem</code>

<ul>
<li>Inside, card is in row until <code>576px</code> where it will switch to column</li>
<li>Each card has a spacing of <code>1.5rem</code> on top</li>
<li>The text “Coding” is a card header</li>
<li>Language name (card title) and description (card text) are inside a card body</li>
<li>Duration in hour is a card footer</li>
<li>Also, the button “Play with” has the “danger” layout and should open a modal</li>
</ul></li>
<li>The second <code>div</code> is the modal:

<ul>
<li>Centered vertically and horizontally</li>
<li>The <code>form</code> has a border on top and a padding on top of <code>1rem</code>:

<ul>
<li>Each items of the <code>form</code> are grouped</li>
<li>The final rendering of the form must be the same as the screen (label on the left, color style, etc..)</li>
</ul></li>
</ul></li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_front_end</code></li>
            <li>Directory: <code>0x0A-Bootstrap</code></li>
            <li>File: <code>3-index.html</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->

  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="4799">
      <span class="no"><i aria-hidden="true" class="fa fa-square-o "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa fa-check-square-o "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa fa-spinner  fa-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="4799" data-batch-id="119" data-toggle="modal" data-target="#task-4799-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-4799-users-done-modal" data-task-id="4799" data-batch-id="119">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "3. Cards"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>

</div>

        <div class="fs-4">
        </div>
      </div>

  </div>
</div>

    </div>
    <div data-role="task4800" data-position="6" id="task-num-4">
      <div class="panel panel-default task-card " id="task-4800">

<span id="user_id" data-id="3559"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Bob Dylan
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>

  </div>

  <div class="panel-body">
    <span id="user_id" data-id="3559"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>From this HTML:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en" dir="ltr"&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"&gt;
        &lt;title&gt;Holberton - Web Stack - Bootstrap&lt;/title&gt;
        &lt;meta name="description" content="Bootstrap is a free and open-source CSS framework"&gt;

        &lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"&gt;

        &lt;script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"&gt;&lt;/script&gt;
        &lt;script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"&gt;&lt;/script&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div&gt;
            &lt;h1&gt;Bob Dylan&lt;/h1&gt;

            &lt;ul&gt;
                &lt;li&gt;
                    &lt;a&gt;Introduction&lt;/a&gt;
                &lt;/li&gt;
                &lt;li&gt;
                    &lt;a&gt;Discography&lt;/a&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
            &lt;div&gt;

                &lt;div&gt;
                    &lt;p&gt;
                        Bob Dylan (born Robert Allen Zimmerman; May 24, 1941) is an American singer-songwriter, author, and visual artist who has been a major figure in popular culture for more than fifty years. 
                    &lt;/p&gt;
                    &lt;p&gt;
                        Much of his most celebrated work dates from the 1960s, when songs such as "Blowin' in the Wind" (1963) and "The Times They Are a-Changin'" (1964) became anthems for the civil rights movement and anti-war movement. 
                        His lyrics during this period incorporated a wide range of political, social, philosophical, and literary influences, defied pop-music conventions and appealed to the burgeoning counterculture.
                    &lt;/p&gt;
                &lt;/div&gt;

                &lt;div&gt;
                    &lt;ul&gt;
                        &lt;li&gt;
                            &lt;a&gt;Bob Dylan &lt;em&gt;(1962)&lt;/em&gt;&lt;/a&gt;
                            &lt;div&gt;
                                &lt;p&gt;
                                    Bob Dylan is the debut studio album by American singer-songwriter Bob Dylan, released on March 19, 1962 by Columbia Records. Produced by Columbia's legendary talent scout John H. Hammond, who signed Dylan to the label, the album features folk standards, plus two original compositions, "Talkin' New York" and "Song to Woody".
                                &lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/li&gt;

                        &lt;li&gt;
                            &lt;a&gt;The Freewheelin' Bob Dylan &lt;em&gt;(1963)&lt;/em&gt;&lt;/a&gt;
                            &lt;div&gt;
                                &lt;p&gt;
                                    The Freewheelin' Bob Dylan is the second studio album by American singer-songwriter Bob Dylan, released on May 27, 1963 by Columbia Records. Whereas his self-titled debut album Bob Dylan had contained only two original songs, Freewheelin' represented the beginning of Dylan's writing contemporary words to traditional melodies. Eleven of the thirteen songs on the album are Dylan's original compositions. The album opens with "Blowin' in the Wind", which became an anthem of the 1960s, and an international hit for folk trio Peter, Paul &amp; Mary soon after the release of Freewheelin'. The album featured several other songs which came to be regarded as among Dylan's best compositions and classics of the 1960s folk scene: "Girl from the North Country", "Masters of War", "A Hard Rain's a-Gonna Fall" and "Don't Think Twice, It's All Right".
                                &lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/li&gt;

                        &lt;li&gt;
                            &lt;a&gt;The Times They Are a-Changin' &lt;em&gt;(1964)&lt;/em&gt;&lt;/a&gt;
                            &lt;div&gt;
                                &lt;p&gt;
                                    The Times They Are a-Changin' is the third studio album by American singer-songwriter Bob Dylan, released on January 13, 1964 by Columbia Records. Whereas his previous albums Bob Dylan and The Freewheelin' Bob Dylan consisted of original material among cover songs, Dylan's third album was the first to feature only original compositions. The album consists mostly of stark, sparsely arranged ballads concerning issues such as racism, poverty, and social change. The title track is one of Dylan's most famous; many feel that it captures the spirit of social and political upheaval that characterized the 1960s.
                                &lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/li&gt;

                        &lt;li&gt;
                            &lt;a&gt;Another Side of Bob Dylan &lt;em&gt;(1964)&lt;/em&gt;&lt;/a&gt;
                            &lt;div&gt;
                                &lt;p&gt;
                                    Another Side of Bob Dylan is the fourth studio album by American singer and songwriter Bob Dylan, released on August 8, 1964 by Columbia Records.
                                &lt;/p&gt;
                            &lt;/div&gt;
                        &lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>Build this responsive web page:</p>

<p><img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/335e2b7e5816adec9ab2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220818%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220818T191111Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=896f792f49a9e99b5b04310a29d4927346f35cddb108e7cc827e9b9699168fd8" alt="" style=""></p>

<p><img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/1e3580392c08f3040dcb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220818%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220818T191111Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=4f2e382b6c1cdeb022e51a48f3cd76ef902dcdb21714b65fee202c1a2b031f9c" alt="" style=""></p>

<p><img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/8a56729197879f6ad637.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220818%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220818T191111Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=3620e61b472361fe2603bb3d1625e8711df9256f402c52b2531c9a627f6dd8eb" alt="" style=""></p>

<p><img src="https://intranet-projects-files.s3.amazonaws.com/holbertonschool-webstack/623/4-index.gif" alt="" style=""></p>

<p><strong>Requirements:</strong></p>

<ul>
<li>You are not allow to define any styling in a CSS file, in head or inline - only Bootstrap classes</li>
<li>You can not change the HTML structure - only adding classes is allowed</li>
</ul>

<p><strong>Behaviors/styles:</strong></p>

<ul>
<li>Body background is dark</li>
<li>All elements are inside a <code>div</code> container with a break at <code>960px</code>, background color light and a padding of <code>1rem</code></li>
<li><code>h1</code> has a margin bottom and top of <code>1.5rem</code></li>
<li><code>ul</code> is a tabs navigation with the first item active by default</li>
<li>The <code>div</code> after the <code>ul</code> is the container of tabs content with a background of color white and padding of <code>1rem</code></li>
<li>The switch between tab contents is animated with a fade</li>
<li>In the tab “Discography”:

<ul>
<li>The list of discs has a grouped layout</li>
<li>Each disc name has a link that extends or collapses description<br></li>
</ul></li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_front_end</code></li>
            <li>Directory: <code>0x0A-Bootstrap</code></li>
            <li>File: <code>4-index.html</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->

  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="4800">
      <span class="no"><i aria-hidden="true" class="fa fa-square-o "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa fa-check-square-o "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa fa-spinner  fa-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="4800" data-batch-id="119" data-toggle="modal" data-target="#task-4800-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-4800-users-done-modal" data-task-id="4800" data-batch-id="119">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "4. Bob Dylan"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>

</div>

        <div class="fs-4">
        </div>
      </div>

  </div>
</div>

    </div>
    <div data-role="task4782" data-position="7" id="task-num-5">
      <div class="panel panel-default task-card " id="task-4782">

<span id="user_id" data-id="3559"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. Show/Hide - screen size
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>

  </div>

  <div class="panel-body">
    <span id="user_id" data-id="3559"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>From this HTML:</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en" dir="ltr"&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"&gt;
        &lt;title&gt;Holberton - Web Stack - Bootstrap&lt;/title&gt;
        &lt;meta name="description" content="Bootstrap is a free and open-source CSS framework"&gt;

        &lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;Small title&lt;/h1&gt;
        &lt;h1&gt;Big title&lt;/h1&gt;

        &lt;div&gt;
            &lt;div&gt;Left&lt;/div&gt;
            &lt;div&gt;Middle&lt;/div&gt;
            &lt;div&gt;Right&lt;/div&gt;
        &lt;/div&gt;

    &lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>Build this responsive web page:</p>

<p><img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/1125166bbbfdf836f33d.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220818%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220818T191111Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=56b7e514368c01d03dc98ef9900df8bead815904878ac04ed5e69677933289c0" alt="" style=""></p>

<p><strong>Requirements:</strong></p>

<ul>
<li>You are not allow to define any styling in a CSS file, in <code>head</code> or inline - only Bootstrap classes</li>
<li>You can not change the HTML structure - only adding classes is allowed</li>
</ul>

<p><strong>Behaviors/styles:</strong></p>

<ul>
<li><code>Big title</code> is displayed only for width screen &gt; 768px</li>
<li><code>Small title</code> is displayed only for width screen &lt;= 768px</li>
<li>first <code>div</code> should:

<ul>
<li>be centered as container and take the full width when the width of the screen &lt;= 768px</li>
<li>have “info color” background</li>
<li>have some padding on the 4 directions</li>
<li>have borders of the “info color” and rounded</li>
</ul></li>
<li>“Left div” should:

<ul>
<li>be aligned on the left</li>
<li>have light text color</li>
<li>have light border on the bottom and right</li>
<li>have some padding on the 4 directions</li>
</ul></li>
<li>“Middle div” should:

<ul>
<li>be aligned in the center</li>
<li>have light text color</li>
<li>have light border on the bottom, left and right</li>
<li>have some padding on the 4 directions</li>
<li>have shadow</li>
<li>disappear when the width of the screen &lt;= 768px</li>
</ul></li>
<li>“Right div” should:

<ul>
<li>be aligned on the right</li>
<li>have light text color</li>
<li>have light border on the bottom and left</li>
<li>have some padding on the 4 directions</li>
</ul></li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_front_end</code></li>
            <li>Directory: <code>0x0A-Bootstrap</code></li>
            <li>File: <code>5-index.html</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->

  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="4782">
      <span class="no"><i aria-hidden="true" class="fa fa-square-o "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa fa-check-square-o "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa fa-spinner  fa-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="4782" data-batch-id="119" data-toggle="modal" data-target="#task-4782-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-4782-users-done-modal" data-task-id="4782" data-batch-id="119">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "5. Show/Hide - screen size"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>

</div>

        <div class="fs-4">
        </div>
      </div>

  </div>
</div>

    </div>
    <div data-role="task4801" data-position="10" id="task-num-6">
      <div class="panel panel-default task-card " id="task-4801">

<span id="user_id" data-id="3559"></span>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      6. Overwrite CSS
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>

  </div>

  <div class="panel-body">
    <span id="user_id" data-id="3559"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>With this HTML: (one Bootstrap template example)</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en" dir="ltr"&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8"&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"&gt;
        &lt;title&gt;Holberton - Web Stack - Bootstrap&lt;/title&gt;
        &lt;meta name="description" content="Bootstrap is a free and open-source CSS framework"&gt;

        &lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"&gt;
        &lt;link rel="stylesheet" href="6-styles.css"&gt;
    &lt;/head&gt;
    &lt;body&gt;

        &lt;div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"&gt;
            &lt;h5 class="my-0 mr-md-auto font-weight-normal"&gt;Company name&lt;/h5&gt;
            &lt;nav class="my-2 my-md-0 mr-md-3"&gt;
                &lt;a class="p-2 text-dark" href="#"&gt;Features&lt;/a&gt;
                &lt;a class="p-2 text-dark" href="#"&gt;Enterprise&lt;/a&gt;
                &lt;a class="p-2 text-dark" href="#"&gt;Support&lt;/a&gt;
                &lt;a class="p-2 text-dark" href="#"&gt;Pricing&lt;/a&gt;
            &lt;/nav&gt;
            &lt;a class="btn btn-outline-primary" href="#"&gt;Sign up&lt;/a&gt;
        &lt;/div&gt;

        &lt;div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"&gt;
            &lt;h1 class="display-4"&gt;Pricing&lt;/h1&gt;
            &lt;p class="lead"&gt;Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.&lt;/p&gt;
        &lt;/div&gt;

        &lt;div class="container"&gt;
            &lt;div class="card-deck mb-3 text-center"&gt;
                &lt;div class="card mb-4 box-shadow"&gt;
                    &lt;div class="card-header"&gt;
                        &lt;h4 class="my-0 font-weight-normal"&gt;Free&lt;/h4&gt;
                    &lt;/div&gt;
                    &lt;div class="card-body"&gt;
                        &lt;h1 class="card-title pricing-card-title"&gt;$0 &lt;small class="text-muted"&gt;/ mo&lt;/small&gt;&lt;/h1&gt;
                        &lt;ul class="list-unstyled mt-3 mb-4"&gt;
                            &lt;li&gt;10 users included&lt;/li&gt;
                            &lt;li&gt;2 GB of storage&lt;/li&gt;
                            &lt;li&gt;Email support&lt;/li&gt;
                            &lt;li&gt;Help center access&lt;/li&gt;
                        &lt;/ul&gt;
                        &lt;button type="button" class="btn btn-lg btn-block btn-outline-primary"&gt;Sign up for free&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="card mb-4 box-shadow"&gt;
                    &lt;div class="card-header"&gt;
                        &lt;h4 class="my-0 font-weight-normal"&gt;Pro&lt;/h4&gt;
                    &lt;/div&gt;
                    &lt;div class="card-body"&gt;
                        &lt;h1 class="card-title pricing-card-title"&gt;$15 &lt;small class="text-muted"&gt;/ mo&lt;/small&gt;&lt;/h1&gt;
                        &lt;ul class="list-unstyled mt-3 mb-4"&gt;
                            &lt;li&gt;20 users included&lt;/li&gt;
                            &lt;li&gt;10 GB of storage&lt;/li&gt;
                            &lt;li&gt;Priority email support&lt;/li&gt;
                            &lt;li&gt;Help center access&lt;/li&gt;
                        &lt;/ul&gt;
                        &lt;button type="button" class="btn btn-lg btn-block btn-primary"&gt;Get started&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="card mb-4 box-shadow"&gt;
                    &lt;div class="card-header"&gt;
                        &lt;h4 class="my-0 font-weight-normal"&gt;Enterprise&lt;/h4&gt;
                    &lt;/div&gt;
                    &lt;div class="card-body"&gt;
                        &lt;h1 class="card-title pricing-card-title"&gt;$29 &lt;small class="text-muted"&gt;/ mo&lt;/small&gt;&lt;/h1&gt;
                        &lt;ul class="list-unstyled mt-3 mb-4"&gt;
                            &lt;li&gt;30 users included&lt;/li&gt;
                            &lt;li&gt;15 GB of storage&lt;/li&gt;
                            &lt;li&gt;Phone and email support&lt;/li&gt;
                            &lt;li&gt;Help center access&lt;/li&gt;
                        &lt;/ul&gt;
                        &lt;button type="button" class="btn btn-lg btn-block btn-primary"&gt;Contact us&lt;/button&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;

            &lt;footer class="pt-4 my-md-5 pt-md-5 border-top"&gt;
                &lt;div class="row"&gt;
                    &lt;div class="col-12 col-md"&gt;
                        &lt;img class="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"&gt;
                        &lt;small class="d-block mb-3 text-muted"&gt;© 2017-2018&lt;/small&gt;
                    &lt;/div&gt;
                    &lt;div class="col-6 col-md"&gt;
                        &lt;h5&gt;Features&lt;/h5&gt;
                        &lt;ul class="list-unstyled text-small"&gt;
                            &lt;li&gt;&lt;a class="text-muted" href="#"&gt;Cool stuff&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a class="text-muted" href="#"&gt;Random feature&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a class="text-muted" href="#"&gt;Team feature&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a class="text-muted" href="#"&gt;Stuff for developers&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a class="text-muted" href="#"&gt;Another one&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a class="text-muted" href="#"&gt;Last time&lt;/a&gt;&lt;/li&gt;
                        &lt;/ul&gt;
                    &lt;/div&gt;
                    &lt;div class="col-6 col-md"&gt;
                        &lt;h5&gt;Resources&lt;/h5&gt;
                        &lt;ul class="list-unstyled text-small"&gt;
                            &lt;li&gt;&lt;a class="text-muted" href="#"&gt;Resource&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a class="text-muted" href="#"&gt;Resource name&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a class="text-muted" href="#"&gt;Another resource&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a class="text-muted" href="#"&gt;Final resource&lt;/a&gt;&lt;/li&gt;
                        &lt;/ul&gt;
                    &lt;/div&gt;
                    &lt;div class="col-6 col-md"&gt;
                        &lt;h5&gt;About&lt;/h5&gt;
                        &lt;ul class="list-unstyled text-small"&gt;
                            &lt;li&gt;&lt;a class="text-muted" href="#"&gt;Team&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a class="text-muted" href="#"&gt;Locations&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a class="text-muted" href="#"&gt;Privacy&lt;/a&gt;&lt;/li&gt;
                            &lt;li&gt;&lt;a class="text-muted" href="#"&gt;Terms&lt;/a&gt;&lt;/li&gt;
                        &lt;/ul&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/footer&gt;
        &lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>Create the custom stylesheet <code>6-styles.css</code> to match this layout.</p>

<p><img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/cfec56b8c859081abbd8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220818%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220818T191111Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=5d810dc640ad214e3e3b12bd3774ecec919c899b25b1823063634b4b87ed0f34" alt="" style=""></p>

<p><img src="https://holbertonintranet.s3.amazonaws.com/uploads/medias/2020/3/d902ca67b96983d8792b.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220818%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20220818T191111Z&amp;X-Amz-Expires=86400&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=52bd79c2b5705f93cf8e2319f53c34cabe4d4c9f1cba8e4bf655e7fa6242d878" alt="" style=""></p>

<p><img src="https://intranet-projects-files.s3.amazonaws.com/holbertonschool-webstack/623/6-index.gif" alt="" style=""></p>

<p><strong>Requirements:</strong></p>

<ul>
<li>You are not allow to define any styling in the head or inline of the HTML</li>
<li>You can not change the HTML</li>
</ul>

<p><strong>New styles:</strong></p>

<ul>
<li><code>btn-primary</code> has as background color set to <code>#E0003C</code> and <code>#BC1340</code> for hover/focus/active</li>
<li><code>btn-outline-primary</code> has text and border color set to <code>#E0003C</code></li>
<li><code>a</code> link (no matter which color forced) has text color set to <code>#E0003C</code> normally, in hover and in focus</li>
<li>Card (card container, but also header/footer) has border color set to <code>#E0003C</code> and radius to <code>1rem</code></li>
<li><code>.text-muted</code> has text color set to <code>#8C8C8C</code></li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Github information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-web_front_end</code></li>
            <li>Directory: <code>0x0A-Bootstrap</code></li>
            <li>File: <code>6-styles.css</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->

  </div>

  <!-- Panel footer - Controls -->
  <div class="panel-footer">
      <div class="align-items-center d-flex justify-content-between">
        
<div>
    <button class="student_task_done btn btn-default btn-sm no" data-task-id="4801">
      <span class="no"><i aria-hidden="true" class="fa fa-square-o "></i></span>
      <span class="yes"><i aria-hidden="true" class="fa fa-check-square-o "></i></span>
      <span class="pending"><i aria-hidden="true" class="fa fa-spinner  fa-pulse"></i></span>
      Done<span class="no pending">?</span><span class="yes">!</span>
    </button>

  <button class="student-task-done-by btn btn-default btn-sm" data-task-id="4801" data-batch-id="119" data-toggle="modal" data-target="#task-4801-users-done-modal">
    Help
  </button>
  <div class="modal fade users-done-modal" id="task-4801-users-done-modal" data-task-id="4801" data-batch-id="119">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title">Students who are done with "6. Overwrite CSS"</h4>
        </div>
        <div class="modal-body">
            <div class="list-group">
            </div>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <div class="error"></div>
        </div>
        </div>
    </div>
</div>

</div>

        <div class="fs-4">
        </div>
      </div>

  </div>
</div>

    </div>




          <div data-react-class="projects/ProjectReadyForReview" data-react-props="{&quot;csrfToken&quot;:&quot;tnWylzjG8gzzmpYKgd6cR5t_VUH1qLHBtOamfMs_Gu5kc8NcW-iGqofcoH9mw5tbnVILqz3yUtsmpKbRHg-_bg&quot;,&quot;firstReview&quot;:true,&quot;peerReview&quot;:{&quot;availableReviewersURI&quot;:&quot;/corrections/376716/available_reviewers.json&quot;,&quot;canReviewPeerDirectly&quot;:true,&quot;correctCorrectionURI&quot;:&quot;https://intranet.hbtn.io/corrections/376716/correct&quot;,&quot;qaReviewsURI&quot;:&quot;/corrections/to_review&quot;,&quot;readyForReviewURI&quot;:&quot;/corrections/376716/toggle_ready_for_review.json&quot;,&quot;reviewDeadline&quot;:&quot;2022-08-28T00:00:00.000-04:00&quot;,&quot;synchronousManualReview&quot;:false},&quot;toggled&quot;:false}" data-react-cache-id="projects/ProjectReadyForReview-0"><div class="row gap"><div class="col-md-12"><div class="text-center"><button class="btn btn-lg btn-primary">Ready for a  manual review</button></div></div></div></div>

  </div>
</div>

      </article>
