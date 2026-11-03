// 24 Bespoke Developer Tool Guides
export const developerToolGuides = {
  "json-formatter": {
    overview: "Formats, indents, validates, and beautifies minified JSON payloads with customizable indentation tabs or spaces for rapid API inspection.",
    formula: "Formatted_JSON = JSON.stringify(JSON.parse(Raw_String), null, Indent_Spaces)",
    explanation: "Parses input strings against ECMA-404 JSON syntax specifications, highlighting unclosed brackets, missing quotes, and syntax errors.",
    example: {
      title: "Worked Example: Formatting Minified API Response",
      inputs: 'Raw String: {"status":"success","data":{"id":101,"user":"mani"}}',
      steps: [
        "Validate JSON token syntax and structure.",
        "Apply 2-space hierarchical tree indentation.",
        "Output clean, human-readable JSON structure with line breaks."
      ],
      summary: "Syntax Validated | Indentation: 2 Spaces | Clean Hierarchy Produced"
    },
    metricsText: "All JSON validation executes locally in browser memory via JavaScript V8 engine; confidential API keys and user payloads are never transmitted to external servers.",
    useCases: [
      "REST API Debugging: Pretty-print minified HTTP response payloads from Postman or curl requests.",
      "Config File Validation: Validate syntax for package.json, tsconfig.json, and Kubernetes manifests.",
      "Git Diff Preparation: Format single-line JSON payloads before committing to git for clean line-by-line diffs."
    ],
    commonMistakes: [
      "Using single quotes instead of standard double quotes for JSON keys and string values.",
      "Leaving trailing commas after the final key in objects or arrays (which violates RFC 8259).",
      "Pasting JavaScript object literals with unquoted keys instead of strict JSON."
    ],
    faqs: [
      { question: "Why does JSON reject trailing commas?", answer: "RFC 8259 strictly defines JSON syntax; trailing commas break strict parsers in Python, Java, and Go." },
      { question: "Is my JSON payload secure on Calciverse?", answer: "Yes, JSON formatting executes 100% locally in your browser memory; zero network requests are made." },
      { question: "Can this tool format large multi-megabyte JSON files?", answer: "Yes, modern browser engines can parse and pretty-print multi-megabyte JSON objects in milliseconds." }
    ],
    sources: [{ name: "ECMA-404 The JSON Data Interchange Standard", url: "https://www.ecma-international.org" }]
  },

  "base64-encoder-decoder": {
    overview: "Encodes binary and ASCII/UTF-8 text into standard Base64 representation and decodes Base64 strings back to clean plaintext.",
    formula: "Base64 = Map_6Bit_Chunks_To_Alphabet(ASCII_Binary, RFC_4648)",
    explanation: "Groups 8-bit bytes into 6-bit chunks, mapping each chunk to a 64-character ASCII alphabet (A-Z, a-z, 0-9, +, /) with '=' padding.",
    example: {
      title: "Worked Example: Encoding 'Calciverse' into Base64",
      inputs: "Input Plaintext = 'Calciverse'",
      steps: [
        "Convert ASCII characters into 8-bit binary stream.",
        "Re-group binary bits into 6-bit index blocks.",
        "Map index blocks to Base64 character index table = 'Q2FsY2l2ZXJzZQ=='"
      ],
      summary: "Plaintext = 'Calciverse' | Base64 Encoded = 'Q2FsY2l2ZXJzZQ=='"
    },
    metricsText: "Base64 encoding increases data payload size by approximately 33% due to representing 3 bytes of binary data using 4 ASCII characters.",
    useCases: [
      "Data URIs: Embed small PNG or SVG images directly into CSS and HTML stylesheets without extra HTTP requests.",
      "Basic Authentication: Encode 'username:password' strings for HTTP Authorization headers.",
      "Binary Payload Transmission: Transmit raw binary files safely across text-only protocols like SMTP email."
    ],
    commonMistakes: [
      "Treating Base64 as security or encryption (it is an encoding scheme, not encryption; anyone can decode it instantly).",
      "Failing to handle multibyte UTF-8 characters (like emojis or non-English text) in native browser btoa() functions.",
      "Omitting '=' padding characters, which causes strict backend decoders to throw formatting exceptions."
    ],
    faqs: [
      { question: "Is Base64 an encryption algorithm?", answer: "No. Base64 is an encoding format designed for safe data transmission across text channels; it offers zero cryptographic security." },
      { question: "Why does Base64 output end with '=' signs?", answer: "The '=' symbol is padding used when the input byte length is not evenly divisible by 3, ensuring 4-character alignment." },
      { question: "What is URL-safe Base64?", answer: "A variant that replaces '+' with '-' and '/' with '_' to prevent conflicts with URL query string reserved characters." }
    ],
    sources: [{ name: "RFC 4648 Base64 Encoding Standard", url: "https://www.ietf.org/rfc/rfc4648.txt" }]
  },

  "color-picker": {
    overview: "Picks, samples, and converts web colors interactively between HEX, RGB, HSL, and HSV formats with instant alpha transparency controls.",
    formula: "HEX = '#' + R_hex + G_hex + B_hex | HSL = Transform_RGB_To_Polar_Cylindrical(R, G, B)",
    explanation: "Converts color coordinates across additive RGB color spaces and human-intuitive Hue, Saturation, and Lightness models.",
    example: {
      title: "Worked Example: Converting Calciverse Saffron Color",
      inputs: "HEX Value = #f59e0b",
      steps: [
        "RGB decomposition: R = 245, G = 158, B = 11",
        "HSL conversion: Hue = 38°, Saturation = 92%, Lightness = 50%",
        "CSS declaration: rgb(245, 158, 11) | hsl(38, 92%, 50%)"
      ],
      summary: "HEX = #f59e0b | RGB = (245, 158, 11) | HSL = (38°, 92%, 50%)"
    },
    metricsText: "HSL (Hue, Saturation, Lightness) is preferred by modern UI designers because adjusting lightness or saturation does not alter the underlying color hue.",
    useCases: [
      "UI Design System Tokens: Generate consistent color palettes and interactive hover states for web apps.",
      "Tailwind CSS Configuration: Convert brand hex colors into RGB coordinate triples for Tailwind CSS variable opacity.",
      "Digital Illustration: Sample and inspect exact color values for canvas and vector graphics."
    ],
    commonMistakes: [
      "Using 3-digit shorthand hex codes (#f00) when exact 6-digit or 8-digit precision is required for brand consistency.",
      "Forgetting to check contrast ratios against background colors, causing accessibility failures for visually impaired users.",
      "Confusing CMYK print color profiles with digital sRGB display screens."
    ],
    faqs: [
      { question: "What is the difference between HSL and RGB?", answer: "RGB defines colors by red, green, and blue light intensities; HSL defines colors by hue angle (0-360°), saturation percentage, and lightness percentage." },
      { question: "What do the extra two digits in an 8-digit HEX code mean?", answer: "They represent the alpha transparency channel (e.g. #f59e0bff is 100% opaque, #f59e0b80 is 50% transparent)." },
      { question: "How does the EyeDropper API work?", answer: "Modern browsers provide a native screen magnifying eyedropper that samples pixel colors directly from your desktop display." }
    ],
    sources: [{ name: "W3C CSS Color Module Level 4", url: "https://www.w3.org/TR/css-color-4/" }]
  },

  "regex-tester": {
    overview: "Tests, evaluates, and debugs JavaScript regular expressions in real time with syntax highlighting, flag toggles, and capture group breakdowns.",
    formula: "Matches = RegExp(Pattern, Flags).exec(Target_Text)",
    explanation: "Evaluates search patterns with standard PCRE / ECMAScript flags: global (g), case-insensitive (i), multiline (m), dotAll (s), and unicode (u).",
    example: {
      title: "Worked Example: Email Validation Regex Pattern",
      inputs: "Pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/ | Target: 'user@example.com'",
      steps: [
        "Evaluate username character classes before the @ symbol.",
        "Validate domain host and subdomains.",
        "Validate top-level domain suffix (minimum 2 characters).",
        "Result: Match found (Valid email format)."
      ],
      summary: "Pattern Validated | 1 Full Match Found | Zero Syntax Errors"
    },
    metricsText: "Beware of catastrophic backtracking: nested quantifiers like (a+)+ can cause regular expression evaluation times to explode exponentially.",
    useCases: [
      "Form Input Validation: Test regex rules for validating phone numbers, zip codes, passwords, and email addresses.",
      "Log Scraping: Extract timestamp patterns, IP addresses, and HTTP status codes from web server log files.",
      "Search & Replace Workflows: Formulate capture group replacement strings ($1, $2) for code refactoring."
    ],
    commonMistakes: [
      "Failing to escape special meta-characters (like . * + ? [ ] { } ( ) | ^ $ \\) when searching for literal characters.",
      "Writing unanchored expressions (^ and $) that match substrings when full-string validation was intended.",
      "Creating catastrophic backtracking vulnerabilities that freeze web application event loops."
    ],
    faqs: [
      { question: "What is catastrophic backtracking in regular expressions?", answer: "A performance pitfall where an ambiguous regex pattern forces the regex engine to explore millions of possible match permutations, hanging the CPU." },
      { question: "What is the difference between greedy and lazy quantifiers?", answer: "Greedy quantifiers (*, +) match as much text as possible; lazy quantifiers (*?, +?) match as little text as necessary." },
      { question: "What does the 'm' flag do in regex?", answer: "The multiline flag causes ^ and $ to match the start and end of each individual line, rather than the entire input string." }
    ],
    sources: [{ name: "ECMA-262 ECMAScript RegExp Specification", url: "https://tc39.es/ecma262/" }]
  },

  "html-formatter": {
    overview: "Beautifies minified, messy, or unindented HTML templates with consistent tag indentation, attribute alignment, and DOM hierarchy formatting.",
    formula: "Formatted_HTML = Indent_DOM_Tree(Parse_HTML(Raw_Markup), 2_or_4_Spaces)",
    explanation: "Parses DOM parent-child tag hierarchies, formats inline and block-level elements, and preserves self-closing void elements.",
    example: {
      title: "Worked Example: Formatting Minified Landing Page Section",
      inputs: 'Raw String: <div><h1>Title</h1><p>Description text</p><button>Click</button></div>',
      steps: [
        "Parse open and close tag tokens.",
        "Indent child elements 2 spaces deeper than parent container.",
        "Output clean, multi-line structured HTML markup."
      ],
      summary: "Clean HTML Hierarchy | 2-Space Indentation | Block Elements Formatted"
    },
    metricsText: "Proper HTML tag indentation reduces code review times and prevents unclosed tag bugs that break web page CSS layout trees.",
    useCases: [
      "Email Template Formatting: Clean up messy, nested table-based HTML email newsletter templates.",
      "Web Scraping Inspection: Pretty-print raw HTML source code downloaded from web scrapers for easier parsing.",
      "CMS Template Cleanups: Clean up copy-pasted rich-text HTML exported from WYSIWYG editors."
    ],
    commonMistakes: [
      "Accidentally indenting <pre> or <code> blocks where whitespace changes affect browser text rendering.",
      "Leaving orphaned unclosed <div> or <span> tags that distort downstream flexbox or grid layouts.",
      "Using non-standard custom tags without proper custom element registration."
    ],
    faqs: [
      { question: "Does indenting HTML increase file size?", answer: "Yes, formatting adds whitespace characters; always minify HTML before deploying to production to maximize page load speeds." },
      { question: "What are void elements in HTML?", answer: "Self-closing tags that cannot contain child elements or closing tags, such as <img>, <input>, <br>, and <meta>." },
      { question: "Why is whitespace important inside <pre> tags?", answer: "Browsers preserve exact spaces and line breaks inside <pre> tags; auto-indenting them alters visible output." }
    ],
    sources: [{ name: "W3C HTML5 Specification", url: "https://www.w3.org/TR/html52/" }]
  },

  "sql-formatter": {
    overview: "Formats unreadable, single-line SQL queries into clean, standardized statements with capitalized clauses and indented subqueries.",
    formula: "Beautified_SQL = Indent_Clauses(Capitalize_Keywords(Tokenize_SQL(Raw_Query)))",
    explanation: "Standardizes reserved SQL keywords (SELECT, FROM, WHERE, JOIN, GROUP BY, ORDER BY) into uppercase and aligns table join clauses.",
    example: {
      title: "Worked Example: Formatting Complex E-Commerce Order Query",
      inputs: "Raw String: select o.id, c.name, sum(o.total) from orders o join customers c on o.cust_id=c.id where o.status='paid' group by o.id, c.name order by o.id desc",
      steps: [
        "Capitalize SQL keywords into uppercase.",
        "Place major clauses (SELECT, FROM, JOIN, WHERE, GROUP BY, ORDER BY) on dedicated newlines.",
        "Indent column projections and join conditions 2 spaces."
      ],
      summary: "Keywords Standardized | Clauses Aligned | Subqueries Indented"
    },
    metricsText: "Formatting SQL queries makes complex nested joins and aggregation logic instantly readable during database code reviews.",
    useCases: [
      "Database Query Tuning: Format complex analytical queries from ORM logs (Hibernate, Prisma) for query plan analysis.",
      "Pull Request Reviews: Clean up migration scripts and stored procedures before merging into database repositories.",
      "Documentation & Runbooks: Create beautifully formatted SQL snippets for engineering wikis and runbooks."
    ],
    commonMistakes: [
      "Breaking up string literals or quoted column aliases during automated newline insertion.",
      "Failing to standardize dialect-specific operators between PostgreSQL, MySQL, and SQL Server.",
      "Forgetting to wrap complex OR conditions in parentheses inside WHERE clauses."
    ],
    faqs: [
      { question: "Which SQL dialects does the formatter support?", answer: "Standard ANSI SQL, PostgreSQL, MySQL, SQLite, Oracle PL/SQL, and Microsoft T-SQL syntax." },
      { question: "Why capitalize SQL keywords?", answer: "Uppercasing reserved keywords like SELECT and WHERE creates visual contrast against lower-case table and column identifiers." },
      { question: "Is my database query data secure?", answer: "Yes, formatting executes entirely client-side; database query strings, table schemas, and parameters are never uploaded." }
    ],
    sources: [{ name: "ISO/IEC 9075 SQL Standard", url: "https://www.iso.org" }]
  },

  "css-minifier": {
    overview: "Compresses CSS stylesheets by removing whitespace, comments, trailing semicolons, and redundant rules to reduce asset file sizes and accelerate page loads.",
    formula: "Compressed_CSS = Strip_Comments_And_Whitespace(Raw_CSS)",
    explanation: "Eliminates unnecessary line breaks, spaces around selectors and braces, and converts color codes to shorter hexadecimal equivalents.",
    example: {
      title: "Worked Example: Minifying a Navigation Header Stylesheet",
      inputs: "Raw CSS: 450 bytes with comments, multi-line indentation, and spaces around colons",
      steps: [
        "Strip all CSS multi-line comments (/* ... */).",
        "Remove line breaks, tab indents, and spaces around { } : ; , symbols.",
        "Combine redundant zero units (e.g. 0px -> 0)."
      ],
      summary: "Original = 450 Bytes | Minified = 210 Bytes | Compression Savings = 53.3%"
    },
    metricsText: "Minifying CSS assets reduces initial page payload size, directly improving Google Core Web Vitals (First Contentful Paint and LCP).",
    useCases: [
      "Production Deployment: Minify custom theme stylesheets before uploading to web hosting servers or CDNs.",
      "Asset Size Optimization: Reduce bundle sizes for mobile web applications on constrained cellular data networks.",
      "Inline Critical CSS: Compress above-the-fold critical CSS rules for direct embedding inside HTML <head> tags."
    ],
    commonMistakes: [
      "Over-minifying modern CSS calc() expressions (removing spaces around + and - inside calc() breaks CSS syntax).",
      "Minifying source code without preserving a development backup file for future editing.",
      "Failing to pair minification with Gzip or Brotli server-level compression."
    ],
    faqs: [
      { question: "Why do spaces matter inside CSS calc() functions?", answer: "The CSS specification requires whitespace around the + and - operators inside calc() to distinguish them from positive and negative signs." },
      { question: "How much file size reduction does CSS minification achieve?", answer: "Typically 20% to 50% reduction in raw file size, and further benefits when combined with Gzip/Brotli transfer compression." },
      { question: "Does minifying CSS alter how styles render in browsers?", answer: "No. Minification strips only non-semantic whitespace and comments; all style rendering behavior remains identical." }
    ],
    sources: [{ name: "W3C CSS Syntax Module Level 3", url: "https://www.w3.org/TR/css-syntax-3/" }]
  },

  "js-minifier": {
    overview: "Compresses JavaScript source code by removing whitespace, line breaks, comments, and redundant characters to optimize client download speeds.",
    formula: "Minified_JS = Strip_Redundant_Tokens(JavaScript_Source)",
    explanation: "Safely strips block and single-line comments, condenses whitespace, and preserves critical semicolon terminators.",
    example: {
      title: "Worked Example: Minifying a Client-Side Modal Script",
      inputs: "Raw JS: 1,200 bytes containing comments, indented functions, and variable declarations",
      steps: [
        "Remove all // single-line and /* block */ comments.",
        "Strip extraneous newlines and spaces around operators and braces.",
        "Preserve strict semicolons to prevent Automatic Semicolon Insertion (ASI) bugs."
      ],
      summary: "Original = 1,200 Bytes | Minified = 580 Bytes | Savings = 51.7%"
    },
    metricsText: "Minification eliminates dead characters, while production bundlers combine minification with tree-shaking and variable mangling for maximum compression.",
    useCases: [
      "Script Optimization: Minify standalone JavaScript utility scripts before deploying to production websites.",
      "Bookmarklet Creation: Compress multi-line browser automation scripts into single-line javascript: bookmarklet URLs.",
      "Widget Embedding: Compress embeddable JavaScript tracking tags and chat widget scripts."
    ],
    commonMistakes: [
      "Omitting semicolons in original code, which causes syntax errors when newlines are removed during minification.",
      "Minifying already minified library files (like jquery.min.js), which can introduce corruption.",
      "Debugging production issues on minified code without generating source maps."
    ],
    faqs: [
      { question: "What is the difference between minification and obfuscation?", answer: "Minification strips whitespace and comments to reduce file size; obfuscation deliberately scrambles code logic to make reverse engineering difficult." },
      { question: "What are source maps?", answer: "Files that map minified production code back to original source code lines, enabling easy debugging in browser DevTools." },
      { question: "Why does missing semicolons break minified JavaScript?", answer: "JavaScript's Automatic Semicolon Insertion (ASI) relies on line breaks; stripping newlines can cause adjacent statements to fuse illegally." }
    ],
    sources: [{ name: "ECMA-262 ECMAScript Language Specification", url: "https://tc39.es/ecma262/" }]
  },

  "markdown-previewer": {
    overview: "Renders CommonMark and GitHub Flavored Markdown (GFM) into clean, sanitized HTML in real time with live side-by-side preview.",
    formula: "Rendered_HTML = Sanitize(CommonMark_Parser(Markdown_Source))",
    explanation: "Parses headers, bold/italics, bullet lists, blockquotes, code blocks, tables, and hyperlinks conforming to GFM specifications.",
    example: {
      title: "Worked Example: Previewing a GitHub README Section",
      inputs: "# Project Title\n\n**Bold text**, *italics*, and `inline code`.\n\n- Feature 1\n- Feature 2",
      steps: [
        "Parse heading tokens (# into <h1>).",
        "Convert inline styling markers (** into <strong>, ` into <code>).",
        "Render unordered list items (- into <ul><li>)."
      ],
      summary: "CommonMark Validated | Live HTML Preview Generated | Instant Copy Export"
    },
    metricsText: "Markdown offers a portable, plain-text syntax that converts reliably to HTML, PDF, and documentation sites without proprietary editor lock-in.",
    useCases: [
      "README Documentation: Draft and proofread project README.md files before committing to GitHub or GitLab.",
      "Technical Blogging: Write markdown articles for static site generators like Jekyll, Hugo, Astro, and Next.js.",
      "Note Taking: Formulate structured technical notes with clean code blocks and checklist tasks."
    ],
    commonMistakes: [
      "Forgetting to leave an empty blank line before starting bullet lists, which breaks list parsing in standard CommonMark.",
      "Omitting a space after the # hash symbol for headings (e.g. #Heading instead of # Heading).",
      "Failing to escape raw HTML characters (< and >) inside code snippets."
    ],
    faqs: [
      { question: "What is GitHub Flavored Markdown (GFM)?", answer: "A strict extension of CommonMark that adds support for tables, task checklists, strikethrough text, and autolinks." },
      { question: "How do I create a table in Markdown?", answer: "Use pipes (|) to separate columns and hyphens (-) to define header rows (e.g. | Col 1 | Col 2 |\\n|---|---|)." },
      { question: "Can I use raw HTML inside Markdown?", answer: "Yes, standard Markdown parsers allow raw HTML tags for advanced formatting, unless explicitly disabled for security." }
    ],
    sources: [{ name: "CommonMark Spec", url: "https://commonmark.org" }]
  },

  "url-encoder-decoder": {
    overview: "Encodes reserved and non-ASCII characters into standard percent-encoded escape sequences (%XX) and decodes URL strings safely.",
    formula: "Encoded_URL = encodeURIComponent(String) | Decoded_URL = decodeURIComponent(Encoded_String)",
    explanation: "Replaces unsafe URI characters with a '%' symbol followed by two hexadecimal digits representing their UTF-8 byte values (e.g. space -> %20).",
    example: {
      title: "Worked Example: Encoding Query Parameter String",
      inputs: "Raw String: 'name=Rahul Sharma & co=Calciverse!'",
      steps: [
        "Identify space characters and special symbols (&, =, !).",
        "Encode spaces to %20 and special characters to corresponding hex triplets.",
        "Resulting encoded string: 'name%3DRahul%20Sharma%20%26%20co%3DCalciverse!'"
      ],
      summary: "Plaintext = 'Rahul Sharma & co' | Encoded = 'Rahul%20Sharma%20%26%20co'"
    },
    metricsText: "Failing to URL-encode query string parameters allows characters like '&' and '=' to corrupt HTTP request structures and break backend API parsers.",
    useCases: [
      "API Query Construction: Encode search parameters and user inputs before appending to GET request URL endpoints.",
      "OAuth Redirect URIs: Safely pass callback URLs as query string values inside single-sign-on redirect parameters.",
      "Webhook Payload Links: Prepare encoded URL links containing special characters for notification systems."
    ],
    commonMistakes: [
      "Using encodeURI() when encodeURIComponent() was needed (encodeURI does not encode &, +, or =, which breaks query parameters).",
      "Double-encoding URLs (turning %20 into %2520), which causes backend decoders to receive corrupted strings.",
      "Forgetting that the '+' character represents a space in form-urlencoded data but a literal '+' in path segments."
    ],
    faqs: [
      { question: "What is the difference between encodeURI and encodeURIComponent?", answer: "encodeURI preserves full URL structure (leaving ://, ?, & intact); encodeURIComponent encodes all reserved characters and is intended for individual query parameters." },
      { question: "Why is space encoded as %20 or +?", answer: "%20 is standard percent-encoding; the '+' character is used specifically in application/x-www-form-urlencoded form submissions." },
      { question: "What characters never need URL encoding?", answer: "Unreserved characters: alphanumeric letters (A-Z, a-z), decimal digits (0-9), and hyphen (-), underscore (_), period (.), and tilde (~)." }
    ],
    sources: [{ name: "RFC 3986 Uniform Resource Identifier (URI)", url: "https://www.ietf.org/rfc/rfc3986.txt" }]
  },

  "html-entity-converter": {
    overview: "Converts reserved HTML characters into named entity references (&amp;, &lt;, &gt;) and decimal/hex character codes to prevent XSS attacks and rendering bugs.",
    formula: "HTML_Entities = Replace_Characters({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '\"': '&quot;', \"'\": '&#39;' })",
    explanation: "Ensures reserved markup delimiters are rendered literally by web browsers rather than executed as DOM markup.",
    example: {
      title: "Worked Example: Escaping Script Tag String",
      inputs: "Raw String: '<script>alert(\"XSS\");</script>'",
      steps: [
        "Replace '<' with '&lt;'.",
        "Replace '>' with '&gt;'.",
        "Replace '\"' with '&quot;'.",
        "Result: '&lt;script&gt;alert(&quot;XSS&quot;);&lt;/script&gt;'"
      ],
      summary: "Escaped HTML Entities | XSS Injection Prevented | Browser Displays Literal Text"
    },
    metricsText: "Escaping user-generated inputs using HTML entities is the first line of defense against Cross-Site Scripting (XSS) vulnerabilities.",
    useCases: [
      "XSS Sanitization: Escape untrusted user comments before rendering them into dynamic web pages.",
      "Code Block Display: Render literal HTML tags inside <code> and <pre> elements on technical blogs.",
      "Special Symbol Rendering: Display copyright symbols (&copy;), currency symbols (&pound;, &yen;), and math characters."
    ],
    commonMistakes: [
      "Double-escaping ampersands (&amp; becoming &amp;amp;), which creates ugly literal entity strings on screen.",
      "Failing to escape single quotes (&#39;) inside HTML attribute values, which allows attribute-breaking injections.",
      "Assuming HTML escaping protects against SQL injection (HTML entities only protect against browser DOM execution)."
    ],
    faqs: [
      { question: "Why must the ampersand (&) always be escaped first?", answer: "Because HTML entities begin with an ampersand; if you escape other characters first and then escape ampersands, you double-escape all previous entities." },
      { question: "What are the 5 critical HTML entities to escape?", answer: "& (&amp;), < (&lt;), > (&gt;), \" (&quot;), and ' (&#39; or &apos;)." },
      { question: "What is the difference between named entities and numeric entities?", answer: "Named entities use readable names (&copy;); numeric entities use decimal (&#169;) or hex (&#xA9;) Unicode code points." }
    ],
    sources: [{ name: "W3C HTML Character Entity Reference", url: "https://dev.w3.org/html5/html-author/charref" }]
  },

  "jwt-decoder": {
    overview: "Decodes and inspects JSON Web Token (JWT) headers and claims payloads client-side, displaying algorithm headers, expiration timestamps, and user scopes.",
    formula: "Decoded_Payload = JSON.parse(Base64URL_Decode(JWT.split('.')[1]))",
    explanation: "A JWT consists of three parts separated by dots: Header, Payload, and Signature. Decoding parses Header and Payload without verifying cryptographic signature.",
    example: {
      title: "Worked Example: Inspecting an Authentication Bearer Token",
      inputs: "JWT Token: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTYiLCJ1c2VyIjoibWFuaSIsImV4cCI6MTgwMDAwMDAwMH0.signature",
      steps: [
        "Split token by dot delimiters into three segments.",
        "Base64URL decode Segment 0 (Header: alg = 'HS256', typ = 'JWT').",
        "Base64URL decode Segment 1 (Payload: sub = '123456', user = 'mani', exp = 1800000000).",
        "Convert unix timestamp exp into formatted human expiration date."
      ],
      summary: "Header: HS256 | Subject: 123456 | User: mani | Expiration Validated"
    },
    metricsText: "Decoding a JWT token reveals its payload data, but does not prove authenticity; only verifying the signature against your private secret proves the token is untampered.",
    useCases: [
      "OAuth & Auth0 Debugging: Inspect user permissions, roles, and expiration claims during API integration.",
      "Token Expiry Checking: Check the 'exp' claim to verify whether an access token has expired.",
      "Client-Side State Inspection: Audit user profile attributes passed in identity tokens (ID tokens)."
    ],
    commonMistakes: [
      "Assuming decoding a JWT validates that the token was signed by the genuine auth server.",
      "Storing sensitive personal data (passwords, social security numbers) in JWT payloads (JWT payloads are readable by anyone).",
      "Treating expired tokens as valid without checking the 'exp' timestamp claim."
    ],
    faqs: [
      { question: "Is decoding a JWT safe on Calciverse?", answer: "Yes, decoding runs 100% locally in your browser memory; your authentication tokens are never sent to external servers." },
      { question: "Why is decoding not the same as verifying a JWT?", answer: "Anyone can edit a token's payload and re-encode it; verification requires the cryptographic secret key or public certificate to confirm the signature." },
      { question: "What are common standard JWT claims?", answer: "sub (subject/user ID), iss (issuer), aud (audience), exp (expiration time), and iat (issued at time)." }
    ],
    sources: [{ name: "RFC 7519 JSON Web Token (JWT)", url: "https://www.ietf.org/rfc/rfc7519.txt" }]
  },

  "unix-timestamp-converter": {
    overview: "Converts Unix epoch timestamps (seconds and milliseconds) into human-readable ISO-8601, UTC, and local date-time strings.",
    formula: "Date_String = new Date(Unix_Timestamp_Seconds × 1000).toISOString()",
    explanation: "Counts the number of non-leap seconds elapsed since January 1, 1970 00:00:00 UTC (the Unix Epoch).",
    example: {
      title: "Worked Example: Converting Timestamp 1700000000",
      inputs: "Unix Timestamp = 1700000000 (Seconds)",
      steps: [
        "Multiply by 1,000 to convert to milliseconds: 1,700,000,000,000 ms",
        "Evaluate calendar year, month, day, hours, minutes, and seconds",
        "UTC Date: Wednesday, November 15, 2023 02:40:00 AM UTC",
        "ISO 8601 String: 2023-11-15T02:40:00.000Z"
      ],
      summary: "Timestamp = 1700000000 | UTC Date = Nov 15, 2023 02:40:00 UTC | Relative: Past Event"
    },
    metricsText: "The Year 2038 Problem (Y2038) will affect 32-bit systems when Unix epoch seconds exceed 2,147,483,647 on January 19, 2038.",
    useCases: [
      "Database Query Auditing: Convert raw integer timestamps from MySQL, PostgreSQL, or MongoDB into readable dates.",
      "API Development: Verify expiration dates in authentication tokens and cache headers.",
      "Log Analysis: Translate server log timestamps during incident post-mortems and debugging."
    ],
    commonMistakes: [
      "Confusing Unix timestamps in seconds (10 digits) with JavaScript timestamps in milliseconds (13 digits).",
      "Ignoring client local time zone offsets when comparing UTC server timestamps.",
      "Assuming Unix time counts leap seconds (it deliberately omits leap seconds)."
    ],
    faqs: [
      { question: "What is the Unix Epoch?", answer: "The starting point for Unix time: 00:00:00 Coordinated Universal Time (UTC) on Thursday, January 1, 1970." },
      { question: "How do I tell if a timestamp is in seconds or milliseconds?", answer: "A 10-digit timestamp (e.g. 1700000000) is in seconds; a 13-digit timestamp (e.g. 1700000000000) is in milliseconds." },
      { question: "What will happen in the Year 2038?", answer: "32-bit signed integers will overflow on January 19, 2038; modern 64-bit systems have already resolved this issue." }
    ],
    sources: [{ name: "The Open Group Base Specifications (Unix Time)", url: "https://pubs.opengroup.org" }]
  },

  "diff-checker": {
    overview: "Compares two text passages, code files, or documents side by side, highlighting added, deleted, and modified character differences using the Myers Diff algorithm.",
    formula: "Edit_Script = Shortest_Edit_Path(Myers_Diff_Algorithm(Sequence_A, Sequence_B))",
    explanation: "Computes the minimal sequence of insertions and deletions required to transform Text A into Text B with line-by-line and character-level diffing.",
    example: {
      title: "Worked Example: Comparing Code Revisions",
      inputs: "Original: 'const total = price * 1.18;' | Revised: 'const total = price * (1 + taxRate);'",
      steps: [
        "Tokenize lines and characters into comparable arrays.",
        "Calculate longest common subsequence (LCS).",
        "Highlight '1.18' as deleted (- red) and '(1 + taxRate)' as inserted (+ green)."
      ],
      summary: "1 Modification Detected | Character Diff Highlighted | Zero Data Uploaded"
    },
    metricsText: "The Myers Diff algorithm powers modern version control systems like Git, finding the most compact visual difference between file revisions.",
    useCases: [
      "Code Review Verification: Inspect changes between function refactorings before opening pull requests.",
      "Contract & Legal Comparison: Compare revised contract clauses to spot subtle wording modifications.",
      "Configuration Drift Detection: Compare production server configs against staging templates."
    ],
    commonMistakes: [
      "Confusing line-by-line diffs with character-by-character diffs (missing tiny single-character punctuation changes).",
      "Ignoring trailing newline and whitespace differences across operating systems (CRLF on Windows vs LF on Linux).",
      "Comparing large binary files as plaintext."
    ],
    faqs: [
      { question: "How does Git calculate diffs?", answer: "Git uses Eugene Myers' O(ND) difference algorithm to find the shortest edit path between two sequences of lines." },
      { question: "What is CRLF vs LF?", answer: "Windows uses Carriage Return + Line Feed (\\r\\n), while Linux/macOS uses Line Feed (\\n); whitespace toggles account for this difference." },
      { question: "Is my proprietary code kept private?", answer: "Yes, difference calculation executes entirely client-side in your local browser memory." }
    ],
    sources: [{ name: "Myers Difference Algorithm Paper (Eugene W. Myers)", url: "https://doi.org/10.1007/BF01840446" }]
  },

  "css-gradient-generator": {
    overview: "Generates modern CSS linear, radial, and conic gradient code with interactive color stops, direction angles, and instant CSS clipboard copy.",
    formula: "CSS = linear-gradient(Angle, Color_Stop_1, Color_Stop_2) | radial-gradient(Shape, Color_1, Color_2)",
    explanation: "Constructs smooth color transitions conforming to CSS Images Module Level 3 with browser compatibility prefixes.",
    example: {
      title: "Worked Example: 135° Saffron to Emerald Mesh Gradient",
      inputs: "Angle = 135deg | Stop 1 = #f59e0b (0%) | Stop 2 = #10b981 (100%)",
      steps: [
        "Calculate directional angle vector.",
        "Map primary saffron stop at 0% position.",
        "Map secondary emerald stop at 100% position.",
        "Output: background: linear-gradient(135deg, #f59e0b 0%, #10b981 100%);"
      ],
      summary: "Linear Gradient (135deg) | 2 Color Stops | Cross-Browser CSS Output"
    },
    metricsText: "Using 3 or more color stops with subtle opacity layers creates rich 'mesh' gradient aesthetics popular in modern SaaS landing page designs.",
    useCases: [
      "Hero Section Backgrounds: Create vibrant, high-contrast visual backdrops for modern web headers.",
      "Button & Badge Styling: Add subtle gradient depth to primary call-to-action buttons.",
      "Card UI Borders: Design glowing gradient borders for featured pricing tiers."
    ],
    commonMistakes: [
      "Using clashing complementary colors that mix into a muddy, dull gray transition in the middle.",
      "Omitting fallback solid background colors for legacy email clients that do not support CSS gradients.",
      "Overcomplicating gradients with too many stops, hurting UI readability."
    ],
    faqs: [
      { question: "How do I fix the 'muddy gray' middle in CSS gradients?", answer: "Use intermediate color stops or transition through analogous colors on the color wheel rather than pure complementary opposites." },
      { question: "What is a conic gradient in CSS?", answer: "A gradient where color transitions rotate around a center origin point, like color wheels or pie chart segments." },
      { question: "What are gradient color stop positions?", answer: "Percentages (0% to 100%) that define where a specific color begins transitioning into the next color." }
    ],
    sources: [{ name: "W3C CSS Images Module Level 3", url: "https://www.w3.org/TR/css-images-3/" }]
  },

  "box-shadow-generator": {
    overview: "Builds multi-layer CSS box-shadow effects with visual sliders for horizontal offset, vertical offset, blur radius, spread, and inset depth.",
    formula: "box-shadow: [inset] Offset_X Offset_Y Blur_Radius Spread_Radius Color",
    explanation: "Creates realistic skeuomorphic depth and subtle elevation layers adhering to modern UI design systems.",
    example: {
      title: "Worked Example: Elevated Modern Card Shadow",
      inputs: "Offset X = 0px | Offset Y = 10px | Blur = 25px | Spread = -5px | Color = rgba(0, 0, 0, 0.1)",
      steps: [
        "Set downward vertical elevation to 10px.",
        "Apply soft diffuse blur of 25px.",
        "Add negative spread of -5px to tighten the shadow perimeter.",
        "Result: box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);"
      ],
      summary: "Modern Card Elevation | Soft Blur (25px) | Negative Spread Applied"
    },
    metricsText: "Stacking two shadows—one tight and dark, one broad and diffuse—produces far more natural lighting depth than a single harsh shadow.",
    useCases: [
      "Card Elevation: Design subtle hover elevation states that lift interactive cards when users mouse over them.",
      "Modal Dialog Drop Shadows: Create high-elevation focus shadows that separate modal overlays from page backdrops.",
      "Neumorphism UI: Design soft inset shadows for pressed button states and toggle controls."
    ],
    commonMistakes: [
      "Using pure opaque black (rgba(0,0,0,1)) shadows, which look harsh and amateurish.",
      "Setting excessive blur without negative spread, causing shadows to spill over onto adjacent UI components.",
      "Neglecting reduced-motion and high-contrast accessibility preferences."
    ],
    faqs: [
      { question: "What does negative spread do in CSS box-shadow?", answer: "Negative spread shrinks the shadow smaller than the element itself, concentrating the blur directly beneath the element for a modern elevated look." },
      { question: "What is an inset shadow?", answer: "Adding the 'inset' keyword draws the shadow inside the element's border, creating an indented or sunken effect." },
      { question: "Can I stack multiple shadows on one element?", answer: "Yes, separate multiple shadow definitions with commas (e.g. box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.05);)." }
    ],
    sources: [{ name: "W3C CSS Backgrounds and Borders Module Level 3", url: "https://www.w3.org/TR/css-backgrounds-3/" }]
  },

  "lorem-ipsum-generator": {
    overview: "Generates classic dummy placeholder text in paragraphs, sentences, words, or lists based on Cicero's historic Latin literature.",
    formula: "Output_Text = Generate_Latin_Passage(Paragraph_Count, Include_Standard_Opening)",
    explanation: "Provides realistic visual character and word distribution to test typographic layout hierarchies without reading distraction.",
    example: {
      title: "Worked Example: Generating 2 Paragraphs of Dummy Body Copy",
      inputs: "Length = 2 Paragraphs | Format = Standard Latin | Start with 'Lorem ipsum'",
      steps: [
        "Generate canonical opening: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'",
        "Construct natural sentence lengths varying between 8 and 25 words.",
        "Produce two paragraphs with realistic punctuation and paragraph breaks."
      ],
      summary: "2 Paragraphs Generated | ~150 Words | Typographic Balance Maintained"
    },
    metricsText: "Lorem Ipsum mimics natural English letter frequencies without conveying semantic meaning, keeping visual focus strictly on graphic design.",
    useCases: [
      "Wireframe & Prototype Design: Fill website mockups with realistic text to test heading, paragraph, and line heights.",
      "Typography Testing: Evaluate font kerning, line-height (leading), and column readability.",
      "CMS Template Testing: Populate blog layout templates with dummy copy to test responsive image wrapping."
    ],
    commonMistakes: [
      "Leaving dummy Lorem Ipsum text in production websites before public launch.",
      "Using identical repetitive sentences that don't test realistic text length variations.",
      "Failing to test responsive layouts with actual real-world copy length extremes."
    ],
    faqs: [
      { question: "Where does the text of Lorem Ipsum come from?", answer: "It originates from sections 1.10.32 and 1.10.33 of Cicero's 'De Finibus Bonorum et Malorum' written in 45 BC, scrambled in the 1500s." },
      { question: "Why not use English placeholder text?", answer: "Readers naturally try to read English text, distracting them from evaluating visual layout, font choices, and UI balance." },
      { question: "What does 'Lorem ipsum dolor sit amet' mean in Latin?", answer: "It loosely translates to 'Pain itself is loved, pursued, and sought after, because it is pain,' but is altered into nonsense Latin." }
    ],
    sources: [{ name: "The History of Lorem Ipsum (Lipsum.com)", url: "https://www.lipsum.com" }]
  },

  "number-base-converter": {
    overview: "Converts numbers bidirectionally between Binary (Base 2), Octal (Base 8), Decimal (Base 10), and Hexadecimal (Base 16) formats with bit length indicators.",
    formula: "Target_Base = parseInt(Input_String, Source_Radix).toString(Target_Radix)",
    explanation: "Parses positional notation with powers of base n, supporting integer representations up to 64-bit precision.",
    example: {
      title: "Worked Example: Converting Decimal 255 to Binary and Hexadecimal",
      inputs: "Decimal Value = 255 (Base 10)",
      steps: [
        "Hexadecimal conversion (255 / 16 = 15 remainder 15): 'FF' (Base 16)",
        "Binary conversion (powers of 2: 128+64+32+16+8+4+2+1): '11111111' (Base 2)",
        "Octal conversion (255 / 8 = 31 remainder 7): '377' (Base 8)"
      ],
      summary: "Decimal = 255 | Hex = FF | Binary = 11111111 | Octal = 377"
    },
    metricsText: "Each hexadecimal character maps directly to a 4-bit nibble of binary data (e.g. Hex F = Binary 1111), making hex the ideal human shorthand for raw binary.",
    useCases: [
      "Embedded Systems Programming: Inspect microprocessor register bitmasks and GPIO pin configurations.",
      "Network Subnetting: Convert IP addresses and subnet masks between binary bits and decimal notation.",
      "Color Code Parsing: Decode 24-bit hex RGB color codes into individual 8-bit channel integers."
    ],
    commonMistakes: [
      "Entering invalid digits for a specific base (e.g. typing '8' or '9' into an Octal input field).",
      "Confusing unsigned binary integers with two's complement signed negative binary representations.",
      "Exceeding 53-bit JavaScript safe integer limits (Number.MAX_SAFE_INTEGER) without BigInt."
    ],
    faqs: [
      { question: "Why is hexadecimal so popular in computer science?", answer: "Because 16 is 2^4; exactly two hex digits represent one 8-bit byte, making it compact and easy to align with binary memory." },
      { question: "What is the two's complement of a binary number?", answer: "A mathematical operation to represent negative numbers in binary: invert all bits and add 1." },
      { question: "What is an octal number?", answer: "A base-8 number system using digits 0 to 7; frequently used for Unix file permissions (e.g. chmod 755)." }
    ],
    sources: [{ name: "IEEE Standard for Floating-Point Arithmetic (IEEE 754)", url: "https://standards.ieee.org" }]
  },

  "px-to-rem-converter": {
    overview: "Converts pixel values (px) to scalable rem and em CSS units based on configurable root font-size baselines (default 16px).",
    formula: "rem = px / Root_Base_Font_Size (default 16px) | px = rem × Root_Base_Font_Size",
    explanation: "rem units scale relative to the root <html> font-size, preserving user accessibility preferences set in browser settings.",
    example: {
      title: "Worked Example: Converting 24px Font Size to REM (Base 16px)",
      inputs: "Pixel Value = 24px | Root Base = 16px",
      steps: [
        "Divide pixels by root font size: 24 / 16 = 1.5 rem",
        "CSS declaration: font-size: 1.5rem;",
        "If root base is 10px (62.5% trick): 24 / 10 = 2.4 rem"
      ],
      summary: "24px = 1.5rem (at 16px base) | Scalable | Accessible"
    },
    metricsText: "Hardcoding font sizes in px ignores user browser accessibility preferences; using rem units allows vision-impaired users to scale page text seamlessly.",
    useCases: [
      "Responsive Web Typography: Convert Figma/Sketch pixel mockup specifications into responsive rem CSS units.",
      "Tailwind Spacing Calibration: Verify spacing classes (e.g. p-4 = 1rem = 16px, p-6 = 1.5rem = 24px).",
      "Web Accessibility (a11y) Auditing: Replace fixed px font declarations to comply with WCAG 1.4.4 Resize Text criteria."
    ],
    commonMistakes: [
      "Confusing rem (root em, relative to <html>) with em (relative to immediate parent font size).",
      "Hardcoding font-size: 16px on the <html> tag, which overrides user browser font preferences.",
      "Using rem for border widths (1px borders should stay in px to avoid subpixel rounding artifacts)."
    ],
    faqs: [
      { question: "What is the difference between rem and em?", answer: "rem is relative to the root <html> element font size; em is relative to the font size of its immediate parent element." },
      { question: "Why do designers use the 62.5% CSS font-size trick?", answer: "Setting font-size: 62.5% on <html> makes 1rem equal to 10px (instead of 16px), simplifying mental math (e.g. 1.6rem = 16px)." },
      { question: "Should I use rem for padding and margins?", answer: "Yes, using rem for spacing ensures your entire layout scales proportionally when users increase browser zoom or text size." }
    ],
    sources: [{ name: "W3C CSS Values and Units Module Level 4", url: "https://www.w3.org/TR/css-values-4/" }]
  },

  "slug-generator": {
    overview: "Converts article titles and text strings into clean, sanitized, URL-friendly slugs with lowercase alphanumeric characters, accents removed, and hyphens.",
    formula: "Slug = Text.normalize('NFD').replace(/[\\u0300-\\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')",
    explanation: "Strips diacritics, removes non-alphanumeric punctuation, replaces spaces with hyphens, and trims leading/trailing dashes.",
    example: {
      title: "Worked Example: Generating SEO Slug for Article Title",
      inputs: "Title: 'What's the Best Way to Calculate Loan EMI in 2026?!'",
      steps: [
        "Normalize unicode accents and convert to lowercase.",
        "Remove punctuation apostrophes, exclamation points, and question marks.",
        "Replace remaining whitespace gaps with hyphens.",
        "Trim extra dashes: 'whats-the-best-way-to-calculate-loan-emi-in-2026'"
      ],
      summary: "Clean SEO Slug = 'whats-the-best-way-to-calculate-loan-emi-in-2026'"
    },
    metricsText: "Clean, readable URL slugs containing targeted primary keywords improve organic search engine click-through rates and SEO crawlability.",
    useCases: [
      "CMS Publishing: Automatically generate URL path permalinks for blog posts, documentation, and products.",
      "Database Key Indexing: Create human-readable unique identifier keys for NoSQL database records.",
      "File Naming Standardization: Sanitize document titles for safe file storage across Linux and Windows filesystems."
    ],
    commonMistakes: [
      "Leaving stop words (the, a, and) that make URL slugs unnecessarily long without adding SEO keyword value.",
      "Allowing multiple consecutive dashes (--) or trailing dashes at the end of the URL slug.",
      "Failing to normalize accented foreign characters (e.g. 'Café' becoming 'caf' instead of 'cafe')."
    ],
    faqs: [
      { question: "What is an SEO-friendly URL slug?", answer: "A short, descriptive, lowercase URL segment using hyphens to separate words that clearly signals page content to search engines and users." },
      { question: "Should I use underscores (_) or hyphens (-) in URLs?", answer: "Always use hyphens (-); Google's search algorithms treat hyphens as word separators, but treat underscores as joining characters." },
      { question: "How long should a URL slug be?", answer: "Keep slugs concise (typically 3 to 5 key words); shorter URLs are easier to share and achieve higher search CTR." }
    ],
    sources: [{ name: "Google Search Central URL Structure Guidelines", url: "https://developers.google.com/search/docs/crawling-indexing/url-structure" }]
  },

  "hash-generator": {
    overview: "Generates cryptographic message digests (SHA-256, SHA-512, SHA-1, MD5) from text strings using the native Web Crypto API.",
    formula: "Hash = Array.from(new Uint8Array(await crypto.subtle.digest(Algorithm, Data))).map(b => b.toString(16).padStart(2, '0')).join('')",
    explanation: "One-way cryptographic mathematical functions that convert arbitrary input text into fixed-length hexadecimal hash digests.",
    example: {
      title: "Worked Example: Generating SHA-256 Hash of 'Calciverse'",
      inputs: "Input String = 'Calciverse' | Algorithm = SHA-256",
      steps: [
        "Encode string into UTF-8 byte array.",
        "Execute SHA-256 cryptographic hashing rounds.",
        "Format 256-bit binary output into 64-character hexadecimal digest string."
      ],
      summary: "Algorithm = SHA-256 | Length = 64 Hex Characters | 100% Client-Side"
    },
    metricsText: "Cryptographic hash functions are deterministic: identical input always produces the exact same hash, while changing a single character completely randomizes the output digest.",
    useCases: [
      "Data Integrity Verification: Verify downloaded file checksums against publisher SHA-256 checksums.",
      "Cache Key Generation: Create deterministic content hashes for browser asset caching and CDN invalidation.",
      "Password Hashing Principles: Understand the fundamental cryptographic primitives used in authentication security."
    ],
    commonMistakes: [
      "Using MD5 or SHA-1 for security or password hashing (both algorithms have known cryptographic collision vulnerabilities).",
      "Storing fast hashes (like raw SHA-256) for passwords without salt and slow key derivation functions (like bcrypt or Argon2).",
      "Assuming a hash can be reversed or 'decrypted' back to its original plain text."
    ],
    faqs: [
      { question: "Can a hash be decrypted?", answer: "No. Cryptographic hashes are one-way mathematical functions; you cannot reverse a hash back to its original input." },
      { question: "Why is SHA-256 preferred over MD5?", answer: "MD5 has severe collision vulnerabilities (different inputs producing the same hash); SHA-256 is cryptographically secure and standard for industry security." },
      { question: "Is my text data sent across the network?", answer: "No, the Web Crypto API executes locally within your browser's native cryptographic hardware sandbox." }
    ],
    sources: [{ name: "NIST FIPS 180-4 Secure Hash Standard (SHS)", url: "https://csrc.nist.gov" }]
  },

  "chmod-calculator": {
    overview: "Calculates Linux/Unix file permissions interactively, toggling Read, Write, and Execute bits to generate octal (755, 644) and symbolic (rwxr-xr-x) syntax.",
    formula: "Permission_Octal = (Read × 4) + (Write × 2) + (Execute × 1) evaluated for User, Group, and Others",
    explanation: "3-digit octal notation: Owner (User), Group, and Public (Others). Read = 4, Write = 2, Execute = 1.",
    example: {
      title: "Worked Example: Standard Web Server File Permissions (chmod 644)",
      inputs: "Owner = Read + Write (4+2=6) | Group = Read (4) | Others = Read (4)",
      steps: [
        "Owner permissions: 4 + 2 = 6 (rw-)",
        "Group permissions: 4 (r--)",
        "Others permissions: 4 (r--)",
        "Resulting octal command: chmod 644 filename.html"
      ],
      summary: "Octal = 644 | Symbolic = -rw-r--r-- | Safe for Web Assets"
    },
    metricsText: "Setting chmod 777 grants full read, write, and execute permissions to anyone on the server, creating severe security vulnerabilities.",
    useCases: [
      "Web Server Security: Configure safe 644 file permissions and 755 directory permissions on Nginx/Apache servers.",
      "SSH Key Hardening: Set chmod 400 or 600 on private id_rsa keys to prevent SSH permission denied errors.",
      "Script Execution: Grant execution rights (chmod +x or chmod 755) to shell scripts and deployment automation."
    ],
    commonMistakes: [
      "Using chmod 777 as a quick fix for web server permission errors instead of fixing proper user ownership (chown).",
      "Forgetting that directories require the execute bit (x) for users to traverse (cd) into them.",
      "Leaving configuration files containing database passwords readable by others (should be chmod 600)."
    ],
    faqs: [
      { question: "What are the standard permissions for web files and folders?", answer: "Standard safe practice: 755 (rwxr-xr-x) for directories, and 644 (rw-r--r--) for static files." },
      { question: "Why does SSH reject my private key?", answer: "SSH requires private keys to be protected from other users; running 'chmod 600 ~/.ssh/id_rsa' fixes this error." },
      { question: "What does the 4th leading digit mean in chmod (e.g. 1777)?", answer: "Special permission bits: SUID (4), SGID (2), and Sticky Bit (1, used on /tmp directories so only owners can delete files)." }
    ],
    sources: [{ name: "POSIX IEEE Std 1003.1 (chmod)", url: "https://pubs.opengroup.org" }]
  },

  "css-px-to-vw-calculator": {
    overview: "Converts fixed pixel dimensions into responsive Viewport Width (vw) and Viewport Height (vh) units based on target screen mockup resolutions.",
    formula: "vw = (px / Viewport_Width_px) × 100 | vh = (px / Viewport_Height_px) × 100",
    explanation: "Enables fluid CSS scaling where typography and component sizes scale proportionally with screen viewport width.",
    example: {
      title: "Worked Example: Converting 48px Heading on 1440px Desktop Canvas",
      inputs: "Target Pixels = 48px | Viewport Canvas Width = 1440px",
      steps: [
        "Divide pixels by canvas width: 48 / 1440 = 0.03333",
        "Multiply by 100: 0.03333 × 100 = 3.333vw",
        "CSS declaration: font-size: 3.333vw;"
      ],
      summary: "48px at 1440px Canvas = 3.333vw | Responsive Scaling Enabled"
    },
    metricsText: "Using CSS clamp(1.5rem, 3vw, 3rem) prevents viewport-based typography from becoming unreadably tiny on mobile or gigantic on ultra-wide monitors.",
    useCases: [
      "Fluid Typography: Create headline fonts that scale smoothly between mobile and desktop screen sizes.",
      "Hero Banners: Proportion full-screen landing page headers to match 100vh viewport heights.",
      "Aspect Ratio Containers: Build responsive canvas containers that maintain exact layout proportions."
    ],
    commonMistakes: [
      "Using pure vw units for body text without clamp(), causing tiny illegible text on mobile phones.",
      "Forgetting that 100vw includes the browser scrollbar width in some desktop browsers, causing horizontal scroll.",
      "Confusing vh (viewport height) with dvh (dynamic viewport height on mobile devices with collapsing address bars)."
    ],
    faqs: [
      { question: "What is the difference between vw and %?", answer: "vw is always relative to the browser viewport window; % is relative to the size of the immediate parent element." },
      { question: "What are dvh and lvh units in modern CSS?", answer: "dvh (dynamic viewport height) adjusts dynamically as mobile browser address bars expand and collapse; lvh reflects the largest possible viewport height." },
      { question: "How do I prevent viewport fonts from scaling too large?", answer: "Use CSS clamp(): font-size: clamp(min, preferred_vw, max); to lock minimum and maximum boundaries." }
    ],
    sources: [{ name: "W3C CSS Values and Units Module Level 4", url: "https://www.w3.org/TR/css-values-4/" }]
  },

  "color-contrast-checker": {
    overview: "Evaluates the luminance contrast ratio between foreground text and background colors according to Web Content Accessibility Guidelines (WCAG 2.1).",
    formula: "Contrast Ratio = (L1 + 0.05) / (L2 + 0.05) where L1 is relative luminance of lighter color and L2 is darker color",
    explanation: "Checks compliance against WCAG Level AA (minimum 4.5:1 for normal text, 3:1 for large text) and Level AAA (minimum 7:1 for normal text).",
    example: {
      title: "Worked Example: Evaluating Dark Slate Text (#0f172a) on Light Gray Background (#f8fafc)",
      inputs: "Foreground = #0f172a | Background = #f8fafc",
      steps: [
        "Calculate relative luminance L1 and L2.",
        "Ratio = (0.95 + 0.05) / (0.02 + 0.05) = 1.00 / 0.07 = 14.28:1",
        "Threshold comparison: Exceeds 4.5:1 (AA) and 7.0:1 (AAA)."
      ],
      summary: "Contrast Ratio = 14.3:1 | WCAG AA: PASS | WCAG AAA: PASS (Accessible)"
    },
    metricsText: "Approximately 8% of men and 0.5% of women have color vision deficiencies; maintaining 4.5:1 contrast ensures text remains readable for all users.",
    useCases: [
      "Accessibility Compliance: Ensure web user interfaces comply with legal Americans with Disabilities Act (ADA) and WCAG standards.",
      "Design System Auditing: Audit button text, input labels, and alert banners for accessible readability.",
      "Dark Mode Optimization: Validate inverted color palettes to prevent low-contrast gray-on-dark eye fatigue."
    ],
    commonMistakes: [
      "Checking contrast only on normal state and forgetting hover, focus, and disabled button states.",
      "Placing low-contrast light gray text (#94a3b8) on white backgrounds, failing minimum AA criteria.",
      "Relying solely on color to convey information (e.g. green for success without an accompanying icon or text label)."
    ],
    faqs: [
      { question: "What is the minimum WCAG contrast ratio for normal text?", answer: "WCAG 2.1 Level AA requires a minimum contrast ratio of 4.5:1 for regular body text, and 3:1 for large text (18pt or 14pt bold)." },
      { question: "What is the AAA contrast standard?", answer: "WCAG Level AAA requires a stricter 7:1 ratio for normal text and 4.5:1 for large text, representing highest accessibility." },
      { question: "Do placeholder texts inside inputs need to meet contrast ratios?", answer: "Yes, low-contrast placeholder text is one of the most common accessibility failures flagged by automated audit tools." }
    ],
    sources: [{ name: "W3C Web Content Accessibility Guidelines (WCAG) 2.1", url: "https://www.w3.org/WAI/standards-guidelines/wcag/" }]
  }
};

