# Force To Full Width

Some time we need to force inner element to full width that contain in .container or similar parent. 

## Getting Started

Download and include in your folder or just copy paste the forceToFullWidth() function from [force2full](https://github.com/mlbd/force-to-full-width/blob/master/force2full.js) or use css to do same thing ( but css will work if that inner element has the full with of container.)

## Initialize 

before using force2full use id/class in your anchor tag like 
```
$('.inner-element').forceToFullWidth();
```


## Extra options

```
$('.inner-element').forceToFullWidth({
  container : '.container'
});

```

You can pass multiple value in force2full function like

```
$('.example a, .exmapleB a, .exmapleC a').forceToFullWidth();

```
