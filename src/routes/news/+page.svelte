



<script>
  import Landing10 from "../../components/Landing10/Landing10.svelte";
import News from "../../components/news/News.svelte";
import RecentNews from "../../components/news/RecentNews.svelte";

export let data;

const news =data.news
</script>


<div>
  <RecentNews/>
  <News {news}/>
  <Landing10/>
</div>