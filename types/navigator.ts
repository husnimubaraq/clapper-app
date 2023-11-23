import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigationProp } from "@react-navigation/native";
import { TComplaint } from "features/complaint";

export type RootStackParamList = {
    Main: undefined;
    Login: undefined;
    Register: undefined;
    ResetPassword: undefined;
    BottomTab: undefined
    Clapper: undefined;
    Complaint: undefined;
    ComplaintDetail: TComplaint;
};

export type StackNavigation = NavigationProp<RootStackParamList>;

export type BottomTabParamList = {
    Home: undefined;
    Center: undefined;
    Profile: undefined;
};

export type BottomTabNavigation = BottomTabNavigationProp<BottomTabParamList>;