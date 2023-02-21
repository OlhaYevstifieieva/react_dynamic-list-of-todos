import React, { ChangeEvent } from 'react';
import { Filter } from '../../types/Filter';

type Props = {
  ready: string;
  onStatusChange: (value: Filter) => void;
  query: string;
  onInputChange: (value: string) => void;
};

export const TodoFilter: React.FC<Props> = ({
  ready,
  onStatusChange,
  query,
  onInputChange,
}) => {
  const changeReady = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    onStatusChange(value as Filter);
  };

  const inputString = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    onInputChange(value);
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={ready}
            onChange={changeReady}
          >
            <option value={Filter.All}>All</option>
            <option value={Filter.Active}>Active</option>
            <option value={Filter.Completed}>Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={inputString}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>
        {query.length > 0 && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            <button
              aria-label="delete"
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => onInputChange('')}
            />
          </span>
        )}
      </p>
    </form>
  );
};
