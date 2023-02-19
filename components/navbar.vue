<template>
  <div
    class="z-[999] navbar bg-gradient-to-l from-base-300 via-black to-black border-b-2 border-primary border-opacity-40 h-16 absolute">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <div v-for="link in links">
            <li>
              <NuxtLink :to="link.linkref">{{ link.linkname }}</NuxtLink>
            </li>
          </div>


        </ul>
      </div>
      <a href="/" class="btn btn-ghost normal-case text-xl">Project Cloud4</a>
    </div>
    <div class="navbar-end hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <div v-for="link in links">
          <li>
            <NuxtLink :to="link.linkref">{{ link.linkname }}</NuxtLink>
          </li>
        </div>

      </ul>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          linkname: "Our projects",
          linkref: "/projects",
        },
        {
          linkname: "Contact",
          linkref: "/contact",
        },
      ]
    }
  }
}






</script>