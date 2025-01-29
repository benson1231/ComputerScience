# Regular Expressions (Regex) Cheat Sheet

Regular expressions (regex) are sequences of characters that define search patterns. They are widely used in text processing, searching, and validation.

## 1. Basic Syntax

| Symbol | Description | Example | Matches |
|--------|------------|---------|---------|
| `.` | Matches any single character (except newline) | `c.t` | `cat`, `cut`, `cot` |
| `^` | Matches the start of a line | `^Hello` | Matches "Hello" only at the beginning of a line |
| `$` | Matches the end of a line | `world$` | Matches "world" only at the end of a line |
| `*` | Matches 0 or more occurrences of the previous character | `ba*` | `b`, `ba`, `baa`, `baaa` |
| `+` | Matches 1 or more occurrences of the previous character | `ba+` | `ba`, `baa`, `baaa` |
| `?` | Matches 0 or 1 occurrence of the previous character | `ba?` | `b`, `ba` |
| `{n}` | Matches exactly `n` occurrences | `a{3}` | `aaa` |
| `{n,}` | Matches `n` or more occurrences | `a{2,}` | `aa`, `aaa`, `aaaa` |
| `{n,m}` | Matches between `n` and `m` occurrences | `a{2,4}` | `aa`, `aaa`, `aaaa` |
| `\|` | OR operator (matches either pattern) | `cat\|dog` | `cat`, `dog` |
| `()` | Groups expressions | `(ab)+` | `ab`, `abab`, `ababab` |

## 2. Character Classes

| Character Class | Description | Example | Matches |
|----------------|------------|---------|---------|
| `[abc]` | Matches any one of the specified characters | `[abc]` | `a`, `b`, `c` |
| `[^abc]` | Matches any character except those specified | `[^abc]` | Any character except `a`, `b`, `c` |
| `[a-z]` | Matches any lowercase letter | `[a-z]` | `a`, `b`, ..., `z` |
| `[A-Z]` | Matches any uppercase letter | `[A-Z]` | `A`, `B`, ..., `Z` |
| `[0-9]` | Matches any digit | `[0-9]` | `0`, `1`, ..., `9` |
| `[a-zA-Z0-9]` | Matches any alphanumeric character | `[a-zA-Z0-9]` | `a`, `B`, `3` |
| `.` | Matches any character except newline | `.` | `a`, `1`, `@` |

## 3. Predefined Character Classes

| Symbol | Description | Equivalent To |
|--------|------------|---------------|
| `\d` | Matches any digit | `[0-9]` |
| `\D` | Matches any non-digit | `[^0-9]` |
| `\w` | Matches any word character (alphanumeric + `_`) | `[a-zA-Z0-9_]` |
| `\W` | Matches any non-word character | `[^a-zA-Z0-9_]` |
| `\s` | Matches any whitespace character | `[]` |
| `\S` | Matches any non-whitespace character | `[^\s]` |

## 4. Anchors

| Symbol | Description | Example | Matches |
|--------|------------|---------|---------|
| `^` | Matches start of a line | `^Hello` | `Hello` at the beginning |
| `$` | Matches end of a line | `world$` | `world` at the end |
| `\b` | Matches a word boundary | `\bcat\b` | `cat` as a whole word |
| `\B` | Matches a non-word boundary | `\Bcat\B` | `scat`, `catalog` |

## 5. Lookaheads and Lookbehinds

| Type | Symbol | Description | Example | Matches |
|------|--------|------------|---------|---------|
| Positive Lookahead | `(?=...)` | Matches if the next part exists | `foo(?=bar)` | Matches `foo` only if followed by `bar` |
| Negative Lookahead | `(?!...)` | Matches if the next part does NOT exist | `foo(?!bar)` | Matches `foo` only if NOT followed by `bar` |
| Positive Lookbehind | `(?<=...)` | Matches if preceded by the specified part | `(?<=foo)bar` | Matches `bar` only if preceded by `foo` |
| Negative Lookbehind | `(?<!...)` | Matches if NOT preceded by the specified part | `(?<!foo)bar` | Matches `bar` only if NOT preceded by `foo` |

## 6. Flags

| Flag | Description |
|------|------------|
| `i` | Case-insensitive match |
| `g` | Global match (find all matches) |
| `m` | Multi-line mode (`^` and `$` match start and end of lines) |
| `s` | Dotall mode (`.` matches newline) |
| `x` | Ignore whitespace for readability |

## 7. Common Use Cases

### Matching Email Addresses
```regex
[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}
```

### Matching Phone Numbers (US Format)
```regex
\(\d{3}\) \d{3}-\d{4}
```

### Extracting URLs
```regex
https?://[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(/[a-zA-Z0-9._%+-]*)*
```

### Matching Hex Colors
```regex
#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})
```

### Matching Dates (YYYY-MM-DD)
```regex
\d{4}-\d{2}-\d{2}
```

## Summary
Regular expressions are a powerful tool for searching, matching, and manipulating text. By mastering regex patterns, you can efficiently handle complex text-processing tasks in various programming languages and command-line tools.

