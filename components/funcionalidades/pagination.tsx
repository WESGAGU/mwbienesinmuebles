// components/Pagination.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  categoryId: string;
};

export const Pagination = ({ currentPage, totalPages, categoryId }: PaginationProps) => {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {currentPage > 1 && (
        <Link href={`/category/${categoryId}?page=${currentPage - 1}`} passHref>
          <Button variant="outline">Anterior</Button>
        </Link>
      )}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link key={page} href={`/category/${categoryId}?page=${page}`} passHref>
          <Button variant={currentPage === page ? "default" : "outline"}>
            {page}
          </Button>
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link href={`/category/${categoryId}?page=${currentPage + 1}`} passHref>
          <Button variant="outline">Siguiente</Button>
        </Link>
      )}
    </div>
  );
};