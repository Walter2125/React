import { Heart } from "lucide-react";
import { useSearchParams } from "react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CustomJumbotrom } from "@/components/custom/CustomJumbotrom";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useState } from "react";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action";
import { useQuery } from "@tanstack/react-query";

export const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get('page'));
  console.log(searchParams.get('offset'));

  const [activeTab, setactiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all");

  const { data: heroesResponse } = useQuery({
    queryKey: ["heroes"],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5, // 5 min
  });

  console.log({ heroesResponse });
  // useEffect(() => {
  //   getHeroesByPage().then((heroes) => {
  //     console.log({ heroes });
  //   });
  // }, []);

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
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setactiveTab("all")}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setactiveTab("favorites")}
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setactiveTab("heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setactiveTab("villains")}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <HeroGrid heroes={ heroesResponse?.heroes ?? [] }/>
          </TabsContent>
          <TabsContent value="favorites">
            <h1>Favoritos!!!</h1>
          </TabsContent>
          <TabsContent value="heroes">
            <h1>Héroes</h1>
          </TabsContent>
          <TabsContent value="villains">
            <h1>Villanos</h1>
          </TabsContent>
        </Tabs>

        {/* Character Grid */}
        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  );
};
