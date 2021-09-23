import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../handleState";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
