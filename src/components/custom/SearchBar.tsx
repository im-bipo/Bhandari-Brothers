"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { Models } from "appwrite";

const SearchBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`jobs/?q=${searchQuery}`);
  };

  return (
    <div className="w-full py-5">
      <form
        onSubmit={handleSearch}
        className="border-foreground/20 rounded-md border-2 flex items-center px-2 py-1 w"
      >
        <Search className="w-8 h-8" />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Bolt Delivery - Fleet Management"
            className="border-0 focus-visible:ring-offset-0 focus-visible:ring-0 w-full"
          />
        <Button type="submit" className="bg-primary">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
