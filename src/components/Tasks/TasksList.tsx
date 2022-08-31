// @ts-nocheck
import { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import TASKS_COLUMNS from '../../tables';

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
    } = useTable(
        { columns, data, initialState: { pageIndex: 0 } },
        usePagination
    );

    const { pageIndex, pageSize } = state;

    return (
        <div>
            <table {...getTableProps()} className="m-4 leading-normal">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => {
                                return (
                                    <th
                                        {...column.getHeaderProps()}
                                        className="px-5 py-3 border-b-2 border-gray-200 text-center text-xs font-bold text-blue-600 tracking-wider"
                                    >
                                        {column.render('Header')}
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

            <div style={{ marginTop: '1rem' }}>
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
                    className="mx-2"
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                >
                    1ère page
                </button>

                <button
                    className="mx-2"
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                >
                    Page précédente
                </button>

                <button
                    className="mx-2"
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                >
                    Page suivante
                </button>

                <button
                    className="mx-2"
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                >
                    Dernière page
                </button>
            </div>
        </div>
    );
};

export default TasksList;
