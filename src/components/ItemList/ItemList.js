import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ItemList.module.css';

/**
 * ItemList is a generic semantic list component. `itemComponent` will receive
 * the following props:
 *   destructured current list item as component props,
 *   `id`: value of item's key property (`itemId`)
 *   `isSelected`: true or false, ItemList tracks internally
 */
const ItemList = ({
  itemComponent: renderItemComponent,
  itemId,
  items,
  onSelect,
}) => {
  const [selectedId, setSelectedId] = useState('');
  const handleSelect = id => {
    if (id === selectedId) {
      return;
    }

    setSelectedId(id);
    onSelect(id);
  };

  const renderItem = item => {
    const itemProps = {
      id: item[itemId],
      isSelected: selectedId === item[itemId],
      ...item,
    };

    return (
      <li
        classes={styles.item}
        key={item[itemId]}
        onClick={() => handleSelect(item[itemId])}
      >
        {renderItemComponent(itemProps)}
      </li>
    );
  };

  return (
    <ul className={styles.wrapper}>{items.map(item => renderItem(item))}</ul>
  );
};

ItemList.propTypes = {
  itemComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(React.Component),
  ]),
  itemId: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ItemList;
