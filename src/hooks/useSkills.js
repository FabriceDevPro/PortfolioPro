import { useContext } from 'react';
import { SkillsContext } from '../context/SkillsContext'; // Assurez-vous que le chemin d'import est correct

export const useSkills = () => useContext(SkillsContext);
