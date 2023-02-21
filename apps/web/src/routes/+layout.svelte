<script lang="ts">
  import { page } from '$app/stores';
  import '@unocss/reset/tailwind.css';

  interface ILink {
    href: string;
    label: string;
  }

  const links: ILink[] = [
    {
      href: '/',
      label: 'Routines'
    },
    {
      href: '/exercises',
      label: 'Exercises'
    }
  ];
</script>

<div class="font-barlow grid grid-cols-[20rem_1fr] h-full">
  <nav class="p-5 bg-neutral-800 text-gray-100 flex flex-col gap-5">
    <span class="uppercase font-bold text-xl">JustWorkout</span>
    <ul class="flex flex-col gap-1">
      {#each links as { href, label } (href)}
        <li class="contents">
          <a
            class="px-5 py-3 {$page.url.pathname === href
              ? 'bg-green-900 hover:bg-green-700'
              : 'bg-neutral-900 hover:bg-neutral-700'} cursor-pointer rounded font-bold text-sm tracking-wider uppercase"
            {href}
            >{label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <main class="p-5 bg-neutral-900 text-gray-100">
    <slot />
  </main>
</div>

<!-- <slot /> -->
<style uno:preflights uno:safelist global>
  html,
  body {
    height: 100%;
  }
</style>
