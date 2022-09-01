// @ts-nocheck
import { useMemo } from 'react';
import {
    useTable,
    usePagination,
    useSortBy,
    useGlobalFilter,
} from 'react-table';
import TASKS_COLUMNS from '../../tables';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronDoubleRightIcon,
    ChevronDoubleLeftIcon,
    ArrowCircleDownIcon,
    ArrowCircleLeftIcon,
    ArrowCircleUpIcon,
} from '@heroicons/react/solid';
import GlobalFilter from './GlobalFilter';
import InputTextWithIcon from '../ui/form/InputTextWithIcon';

const TasksList = ({ data }: { data: any }) => {
    const columns = useMemo(() => TASKS_COLUMNS, []);

    const {
        headerGroups,
        footerGroups,
        getTableProps,
        getTableBodyProps,
        prepareRow,
        page,
        previousPage,
        nextPage,
        canPreviousPage,
        canNextPage,
        setPageSize,
        gotoPage,
        pageCount,
        pageOptions,
        state,
        setGlobalFilter,
    } = useTable(
        { columns, data, initialState: { pageIndex: 0 } },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const { pageIndex, pageSize, globalFilter } = state;

    return (
        <div>
            <InputTextWithIcon />
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

            <table {...getTableProps()} className="m-4 leading-normal">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => {
                                return (
                                    <th
                                        {...column.getHeaderProps(
                                            column.getSortByToggleProps()
                                        )}
                                        className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-bold text-blue-600 tracking-wider"
                                    >
                                        {column.render('Header')}
                                        <span
                                            style={{
                                                color: 'blue',
                                                fontSize: '1.5rem',
                                            }}
                                        >
                                            {column.isSorted ? (
                                                column.isSortedDesc ? (
                                                    <ArrowCircleUpIcon className="h5 w-5 text-black" />
                                                ) : (
                                                    <ArrowCircleDownIcon className="h5 w-5 text-black" />
                                                )
                                            ) : (
                                                <ArrowCircleLeftIcon className="h5 w-5 text-black" />
                                            )}
                                        </span>
                                    </th>
                                );
                            })}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);

                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm w-64"
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>

                <tfoot>
                    {footerGroups.map((footerGroup) => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {footerGroup.headers.map((column) => {
                                return (
                                    <th
                                        {...column.getFooterProps()}
                                        className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-bold text-blue-600 tracking-wider"
                                    >
                                        {column.render('Footer')}
                                    </th>
                                );
                            })}
                        </tr>
                    ))}
                </tfoot>
            </table>

            <div className="inline-flex border border-[#e4e4e4] bg-white p-4 mx-4 rounded-xl">
                <span>
                    Page {pageIndex + 1} sur {pageOptions.length}
                </span>

                <select
                    className="mx-2"
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                >
                    {[2, 5, 10].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Afficher {pageSize} par page
                        </option>
                    ))}
                </select>

                <button
                    className="opacity-100 disabled:opacity-25 mx-2 w-9 h-9 flex items-center justify-center rounded-md border border-[#EDEFF1] text-[#838995] text-base hover:bg-primary hover:border-primary hover:text-white"
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                >
                    <ChevronDoubleLeftIcon className="h5 w-5 text-black" />
                </button>

                <button
                    className="opacity-100 disabled:opacity-25 mx-2 w-9 h-9 flex items-center justify-center rounded-md border border-[#EDEFF1] text-[#838995] text-base hover:bg-primary hover:border-primary hover:text-white"
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                    <ChevronLeftIcon className="h5 w-5 text-black" />
                </button>

                <button
                    className="opacity-100 disabled:opacity-25 mx-2 w-9 h-9 flex items-center justify-center rounded-md border border-[#EDEFF1] text-[#838995] text-base hover:bg-primary hover:border-primary hover:text-white"
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                >
                    <ChevronRightIcon className="h5 w-5 text-black" />
                </button>

                <button
                    className="opacity-100 disabled:opacity-25 mx-2 w-9 h-9 flex items-center justify-center rounded-md border border-[#EDEFF1] text-[#838995] text-base hover:bg-primary hover:border-primary hover:text-white"
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                    <ChevronDoubleRightIcon className="h5 w-5 text-black" />
                </button>
            </div>
        </div>
    );
};

export default TasksList;
