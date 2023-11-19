---
title: Behind the Scene Updates to Blog
pubDate: 2023-11-19T18:39:35.342Z
description: "Additional API integrations for posts and other additions to workflow for this blog."
tags: ["blog"]
image: ""
publish: true
author: dan
type: posts
---

# Content Collection Integration

Last week I finally decided to integrate the content collection api to my blog. Up until this post, the posts were generated from the `pages` directory, which for all intents and purposes is used to store more static pages like the index and about-me page. While continuing to generate posts from the `pages` directory would have been fine, it wouldn't have allowed for the flexibility of bundling up different type of posts and contents beyond just "blog posts". I don't imagine this blog to grow very much in features, but having the option to let's say query based on special tags and provide a link to those posts seems very convenient. 

Also, why not add a little spice to my life right? So starting from today, the content collection api has been integrated. If anyone else is interested it's basically:
1. Move posts from the `src/pages/` directory to `content/posts`
2. Create `config.ts` to define the collections and export them. It's also here you would define the frontmatter schema for static type checking. In Astro, a content collection will be a directory. For example for me, I only have one collection/directory called `posts`.
3. Create a slug file where the old posts were stored in `src/pages`. This is where the paths and passing relevent props to the posts will be generated and also the templates will be rendered. This is good news because now, the layout logic is now separated from the markdown!
4. Clean up and modify any pages that pointed to the old posts. Also, remove the layout frontmatter value because that is no longer required.

## Immediate Differences Worth Noting

1. The layout is decoupled from the markdown.

When using the pages directory to store and generate posts, the layout had to be stored in the markdown frontmatter like so:

```markdown
---
title: This is the Title of a Blog Post
pubDate: 2019-11-19
// some other descriptors
layout: "../../layouts/BlogLayout.astro"
---
```

Now, a markdown file contains only text and no logic. Nice.

2. Robust Frontmatter Values

It seems that part of the content collections API is that it type checks frontmatter values like a compiled language. I haven't thoroughly tested this feature however since my frontmatter values are very minimal at the moment. However I did have to define the schema types in the `config.ts` so at the very least I know they are lurking in the background.

3. More Query Power

Using the content collection feauture allows me to query based on tags natively. Super cool when I start organizing my posts via tags. At the moment, my tags have pretty much been under "blog".


## Other Stuff

You might have noticed I moved some stuff around on the home page. I have the itch to make UI changes or at the very least have a more unified look but at the same time I have to ask myself "How much do I continue to tweak my settings before it gets out of control." Not to wave the Tailwind flag again, but it just makes development so smooth it makes me want to delve deeper into UI design!

Anyways, until next time.