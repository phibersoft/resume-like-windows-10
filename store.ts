import create from "zustand";
import type { IProgram } from "./config/program-config";

interface ProgramState {
  currentPrograms: IProgram[];
  activeProgram: IProgram | null;

  openProgram: (program: IProgram) => void;
  closeProgram: (program: IProgram) => void;
  minimizeProgram: () => void;
}

const usePrograms = create<ProgramState>((set) => ({
  currentPrograms: [],
  activeProgram: null,

  openProgram: (program: IProgram) => {
    set((state) => {
      // Check if program is already open
      if (state.currentPrograms.includes(program)) {
        // If it is, set it as the active program
        return { activeProgram: program };
      } else {
        // If it isn't, add it to the list of open programs
        return {
          currentPrograms: [...state.currentPrograms, program],
          activeProgram: program,
        };
      }
    });
  },
  closeProgram: (program: IProgram) => {
    set((state) => ({
      currentPrograms: state.currentPrograms.filter((p) => p !== program),
      activeProgram: null,
    }));
  },
  minimizeProgram: () => {
    set((state) => {
      if (state.currentPrograms.length === 1) {
        return { activeProgram: null };
      }
      // if current program is the last one in the list, set active program first in list
      if (
        state.currentPrograms[state.currentPrograms.length - 1] ===
        state.activeProgram
      ) {
        return { activeProgram: state.currentPrograms[0] };
      }
      // if current program is not the last one in the list, set active program to the next one in the list
      return {
        activeProgram:
          state.currentPrograms[
            state.currentPrograms.indexOf(state.activeProgram as IProgram) + 1
          ],
      };
    });
  },
}));

export default usePrograms;
