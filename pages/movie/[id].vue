<script setup lang="ts">
import { useMovie } from '~/entities/movie'

definePageMeta({
  layout: 'main',
})
const route = useRoute()

const { getMovieByID } = useMovie()

const data = await getMovieByID(route.params.id as string)
</script>

<template>
  <div class="page-header">
    <div class="pointer-events-none absolute inset-0 z-[2] bg-black/50" />
    <NuxtImg
      :src="`https://image.tmdb.org/t/p/original/${data.backdrop_path}`"
      :alt="data.original_title"
      class="absolute inset-0 z-[1] size-full object-cover object-top"
    />
    <div class="container relative inset-y-1/4 z-[2] flex h-[400px] gap-8 rounded-md bg-black/65 p-5 text-white">
      <NuxtImg

        :src="data.poster_path
          ? `https://image.tmdb.org/t/p/original/${data.poster_path}`
          : '/img/no-image.png'"
        :alt="data.original_title"
        width="350"
        class="aspect-[7/10] object-cover"
      />
      <div>
        <div class="grid gap-5">
          <h1 class="text-5xl font-bold">
            {{ data.original_title }}
          </h1>
          <div class=" text-sm text-gray-500">
            {{ data.genres.map((genre) => genre.name).join(', ') }}
          </div>
          <p class="text-lg">
            {{ data.overview }}
          </p>
          <div>
            <ul class="flex gap-8 text-base tracking-wide">
              <li>
                <span class="text-primary">Status: </span> {{ data.status }}
              </li>
              <li>
                <span class="text-primary">Release: </span> {{ new Date(data.release_date).getFullYear() }}
              </li>
              <li>
                <span class="text-primary">Budget: </span>  {{ data.budget.toLocaleString('en-US') }} $
              </li>
              <li class="mb-5">
                <span class="text-primary">Runtime: </span>  {{ data.runtime }} min
              </li>
            </ul>
          </div>
        </div>

        <div class="mb-4 flex gap-3">
          <div class="flex items-center gap-2">
            <AIcon name="imdb" class="h-5 w-10" />
            <p class="text-xs">
              {{ Math.round(data.vote_average) }}/10
            </p>
          </div>
          <div class="flex items-center gap-1">
            <AIcon name="tomato" class="h-5 w-10" />
            <p class="text-xs">
              {{ Math.round((data.vote_average * 100) / 10) }}%
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
