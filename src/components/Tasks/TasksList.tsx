// @ts-nocheck
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';
import TASKS_COLUMNS from '../../tables';
import Modal from './Modal';
import { DotsHorizontalIcon } from '@heroicons/react/solid';

const TasksList = ({ data }: { data: any }) => {
    // Mémoriser les columns
    const columns = useMemo(() => TASKS_COLUMNS, []);

    const {
        headerGroups,
        footerGroups,
        rows,
        getTableProps,
        getTableBodyProps,
        prepareRow,
    } = useTable({ columns, data });

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
                    {rows.map((row) => {
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
        </div>
    );
};

export default TasksList;
