<script>
	import { alignFlexMap, directionFlexMap, justifyFlexMap } from "$lib/interface";

    export let direction = directionFlexMap.ROW;
    export let align = alignFlexMap.CENTER;
    export let justify = justifyFlexMap.CENTER;
    export let reverse = false;
    export let gap = "0rem";

    $: directionWithReverse = reverse ? `${direction}-reverse` : direction;
  </script>
  
  <div
    {...$$restProps}
    class={$$restProps.class}
    style:display="flex"
    style:flex-direction={directionWithReverse}
    style:align-items={align}
    style:justify-content={justify}
    style:gap={gap}
  >
    <slot />
  </div>

  <style>
    .full-width {
        width: 100%;
        height: 100%;
    }                   
  </style>