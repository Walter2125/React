import { Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotrom } from "@/components/custom/CustomJumbotrom";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { usePaginateHero } from "@/heroes/hooks/usePaginateHero";
import { useTabFilters } from "@/heroes/hooks/useTabFilters";
import { useFavoriteHero } from "@/heroes/hooks/useFavoriteHero";

export const HomePage = () => {
  //useTabFilters()
  const { setSearchParams, selectedTab, page, limit, category } = useTabFilters();
  //usePaginateHero()
  const {data: heroesResponse} = usePaginateHero(+page, +limit, category);
  //useHeroSummary()
  const {data: summary} = useHeroSummary();

  const { favoriteCount, favorites,  } = useFavoriteHero();
  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotrom
          title="Universo de SuperHeroes"
          description="Descubre, explora y administra tus superheroes"
        />

        <CustomBreadcrumbs currentPage="Super Heroes" />
        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" 
              onClick={() => setSearchParams((prev) => {
                prev.set('tab', 'all');
                prev.set('category', 'all');
                prev.set('page', '1');
                return prev;
              })}
            >
              All Characters ({summary?.totalHeroes})
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setSearchParams((prev) => {
                prev.set('tab', 'favorites');
                return prev;
              })}
            >
              <Heart className="h-4 w-4" />
              Favorites ({favoriteCount})
            </TabsTrigger>
            <TabsTrigger value="heroes" 
              onClick={() => setSearchParams((prev) => {
                prev.set('tab', 'heroes');
                prev.set('category', 'hero');
                prev.set('page', '1');
                return prev;
              })}
            >
              Heroes ({summary?.heroCount})
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setSearchParams((prev) => {
                prev.set('tab', 'villains');
                prev.set('category', 'villain');
                prev.set('page', '1');
                return prev;
              })}
            >
              Villains ({summary?.villainCount})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <HeroGrid heroes={ heroesResponse?.heroes ?? [] }/>
          </TabsContent>
          <TabsContent value="favorites">
            <HeroGrid heroes={ favorites}/>
          </TabsContent>
          <TabsContent value="heroes">
            <h1>Héroes</h1>
            <HeroGrid heroes={ heroesResponse?.heroes ?? [] }/>
          </TabsContent>
          <TabsContent value="villains">
            <h1>Villanos</h1>
            <HeroGrid heroes={ heroesResponse?.heroes ?? [] }/>
          </TabsContent>
        </Tabs>

        {/* Character Grid */}
        {/* Pagination */}
        {
          selectedTab !== 'favorites' && (
            <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
          )}
      </>
    </>
  );
};
