import { CustomJumbotrom } from "@/components/custom/CustomJumbotrom";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotrom
        title="Universo de SuperHeroes"
        description="Describe, explora y administra super heroes"
      />

      <CustomBreadcrumbs currentPage="Buscador de héroes" />
      {/* Stats Dashboard */}
      <HeroStats />

      {/* Controls search */}
      <SearchControls/>
      
    </>
  );
};

export default SearchPage;
