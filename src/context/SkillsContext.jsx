import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SkillsContext = createContext();

export const SkillsProvider = ({ children }) => {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <SkillsContext.Provider value={{ activeSkill, setActiveSkill }}>
      {children}
    </SkillsContext.Provider>
  );
};

SkillsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
