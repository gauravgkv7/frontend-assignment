import React from "react";
import "./Skeleton.css";

const SkeletonTable = ({ rows = 12, columns = 6 }) => {
  return (
    <div className="skeleton-table">
      <table>
        <thead>
          <tr>
            {Array.from({ length: columns }).map((_, index) => (
              <th key={index}>
                <div className="skeleton skeleton-header"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex}>
                  <div className="skeleton skeleton-cell"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonTable;