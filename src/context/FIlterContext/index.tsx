import { createContext, useState } from "react";
import {
  ContextProps,
  Filter,
  FilterValues,
  Invoice,
} from "../../types/interface";

const initialContext: FilterValues = {
  filters: {
    paid: false,
    pending: false,
    draft: false,
  },
  toggleFilter: () => {},
  filterInvoices: () => [],
  countFilteredInvoices: () => 0,
};

export const FilterContext = createContext<FilterValues>(initialContext);

export const FilterProvider = ({ children }: ContextProps) => {
  const [filters, setFilters] = useState<Filter>({
    paid: false,
    pending: false,
    draft: false,
  });

  const toggleFilter = (filter: keyof Filter) => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      [filter]: !prevFilter[filter],
    }));
  };

  const filterInvoices = (invoices: Invoice[]) => {
    const { paid, pending, draft } = filters;

    return invoices.filter(
      (invoice) =>
        (paid && invoice.status === "paid") ||
        (pending && invoice.status === "pending") ||
        (draft && invoice.status === "draft"),
    );
  };

  const countFilteredInvoices = (invoices: Invoice[]) => {
    const noFilterActive = !filters.draft && !filters.pending && !filters.paid;

    if (noFilterActive) return invoices.length;

    return invoices.filter((invoice) => {
      return (
        (filters.draft && invoice.status === "draft") ||
        (filters.pending && invoice.status === "pending") ||
        (filters.paid && invoice.status === "paid")
      );
    }).length;
  };

  const contextValue: FilterValues = {
    filters,
    toggleFilter,
    filterInvoices,
    countFilteredInvoices,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};
