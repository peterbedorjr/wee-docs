# Chain

Wee allows many methods to be chained to selectors by omitting the first argument of the method. This often makes code more readable and permits multiple methods to be executed on the same selection.

## Animate

[$(sel).tween(values, options)](/v3/script/animate?id=tween)

In this example, the target is faded out to full transparency.

```js
    $('ref:element').tween({
        opacity: 0
    }, {
        duration: 600
    });
	```

## Core

[$(sel, context)](/v3/script/script/core?id=sel)

[$(sel).each(fn, options)](/v3/script/core?id=each)

[$(sel).map(fn, options)](/v3/scriptscript/core?id=map)

[$(sel).setRef()](/v3/scriptscript/core?id=setref)

[$(sel).setVar()](/v3/script/core?id=setvar)

### Reverse

The reverse method simply reverses the order of the selection results.

```js
    $('.element').reverse();
```

### toArray

Convert a Wee selection to a simple array
```js
    $('.element').toArray();
```

## DOM

- [$(sel).addClass(value)](/v3/script/dom?id=addclass)
- [$(sel).after(source, remove)](/v3/script/dom?id=after)
- [$(sel).append(source)](/v3/script/dom?id=append)
- [$(sel).appendTo(target)](/v3/script/dom?id=appendto)
- [$(sel).attr(a, b)](/v3/script/dom?id=attr)
- [$(sel).before(source, remove)](/v3/script/dom?id=before)
- [$(sel).children(filter)](/v3/script/dom?id=children)
- [$(sel).clone()](/v3/script/dom?id=clone)
- [$(sel).closest(filter, context)](/v3/script/dom?id=closest)
- [$(sel).contains(descendant)](/v3/script/dom?id=contains)
- [$(sel).contents()](/v3/script/dom?id=contents)
- [$(sel).css(a, b)](/v3/script/dom?id=css)
- [$(sel).data(a, b)](/v3/script/dom?id=data)
- [$(sel).empty()](/v3/script/dom?id=empty)
- [$(sel).eq(index, context)](/v3/script/core?id=eq)
- [$(sel).filter(filter, options)](/v3/script/dom?id=filter)
- [$(sel).find(filter)](/v3/script/dom?id=find)
- [$(sel).first()](/v3/script/core?id=first)
- [$(sel).get(index)](/v3/script/core?id=eq)
- [$(sel).hasClass(className)](/v3/script/dom?id=hasclass)
- [$(sel).height(value)](/v3/script/dom?id=height)
- [$(sel).hide()](/v3/script/dom?id=hide)
- [$(sel).html(value)](/v3/script/dom?id=html)
- [$(sel).index()](/v3/script/dom?id=index)
- [$(sel).insertAfter(target)](/v3/script/dom?id=insertafter)
- [$(sel).insertBefore(target)](/v3/script/dom?id=insertbefore)
- [$(sel).is(filter, options)](/v3/script/dom?id=is)
- [$(sel).last(context)](/v3/script/dom?id=last)
- [$(sel).next(filter, options)](/v3/script/dom?id=next)
- [$(sel).not(filter, options)](/v3/script/dom?id=not)
- [$(sel).offset(value)](/v3/script/dom?id=offset)
- [$(sel).parent(filter)](/v3/script/dom?id=parent)
- [$(sel).parents(filter)](/v3/script/dom?id=parents)
- [$(sel).position()](/v3/script/dom?id=position)
- [$(sel).prepend(source)](/v3/script/dom?id=prepend)
- [$(sel).prependTo(target)](/v3/script/dom?id=prependto)
- [$(sel).prev(filter, options)](/v3/script/dom?id=prev)
- [$(sel).prop(a, b)](/v3/script/dom?id=prop)
- [$(sel).remove(context)](/v3/script/dom?id=remove)
- [$(sel).removeAttr(name)](/v3/script/dom?id=removeattr)
- [$(sel).removeClass(value)](/v3/script/dom?id=removeclass)
- [$(sel).replaceWith(source)](/v3/script/dom?id=replacewith)
- [$(sel).scrollLeft(value)](/v3/script/dom?id=scrollleft)
- [$(sel).scrollTop(value)](/v3/script/dom?id=scrolltop)
- [$(sel).serialize(json)](/v3/script/dom?id=serializeform)
- [$(sel).show()](/v3/script/dom?id=show)
- [$(sel).siblings(filter)](/v3/script/dom?id=siblings)
- [$(sel).slice(start, end)](/v3/script/dom?id=slice)
- [$(sel).text(value)](/v3/script/dom?id=text)
- [$(sel).toggle()](/v3/script/dom?id=toggle)
- [$(sel).toggleClass(className, state)](/v3/script/dom?id=toggleclass)
- [$(sel).val(value)](/v3/script/dom?id=val)
- [$(sel).width(value)](/v3/script/dom?id=width)
- [$(sel).wrap(html)](/v3/script/dom?id=wrap)
- [$(sel).wrapInner(html)](/v3/script/dom?id=wrapinner)

### Add

You can join selections using the add method.

```js
$('.element').add('ref:selection').hide();
```

### Example

DOM traversal is made easy with chaining.

```html
    <ul>
		<li>One</li>
		<li>Two</li>
		<li>Three</li>
	</ul>
```
```js
    $('li').eq(1).text();
```

## Events

- [$(sel).on(a, b, c)](/v3/script/events?id=#on)

- [$(sel).off(a, b)](/v3/script/events?id=#off)

- [$(sel).bound(event, fn)](/v3/script/events?id=#bound)

- [$(sel).trigger(name)](/v3/script/events?id=#trigger)

In this example, the selector is the element to which the event is bound.

```js
    $('.element').on('click', function() {
        // Click logic
    });
	```

Here the event is being triggered on the selector.

```js
    $('.element').trigger('click');
```

## Register

To register a new chainable method follow the pattern below.

```js
    Wee.$chain('setId', function(id) {
        this.attr('id', id);

        returnthis;
    });
```

Alternatively you can register methods in a jQuery-compatible syntax.

```js
    $.fn.setId = function(id) {
        this.data('id', id);

        returnthis;
    };
```

To execute the method use the following.

```js
    $('.element').setId(3).show();
```

Be sure to return `this` at the end of your method if the function’s purpose is not to return another value. This ensures the chain can continue.

## Shortcuts

All the core and DOM methods prefixed with `$` are shortcut when chaining is enabled. Just remove the method’s dollar sign and replace `Wee` with `$`.

### Examples
```js
    $.unique([1, 2, 2, 3]);
    $.get('key');
    $.height('ref:element');
```

## View

- [$(sel).render(data)](/v3/script/view?id=#render)

The view chain method updated the content of a DOM element given a data object.

```html
    <div class="element">
		<span class="{{ className }}">{{ content }}</span>
	</div>
```

```js
$('.element').render({
    className: 'dynamic-class',
    content: 'Span contents'
});
```
