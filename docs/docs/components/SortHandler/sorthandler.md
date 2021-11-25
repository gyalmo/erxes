---
id: sorthandler
title: Sort Handler
---

import { SortHandlerComponent } from "./sorthandler.js"

<SortHandlerComponent type="default" />

## Label
<p>Add label by defining<code>label</code> prop.</p>
<SortHandlerComponent type="label" label="Label" />

## Field

<p>Same <code>sortField</code> will be handled at the same time. </p>
<SortHandlerComponent type="sameField" />

## API

<SortHandlerComponent type="APIsorthandler" table={[
  ['sortField', 'string', '', 'Sets the sort field'],
  ['label', 'string', '', 'Defines the handler name']
]} />