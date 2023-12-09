import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigationProp } from "@react-navigation/native";
import { TResetPasswordRequest } from "features/auth";
import { TComplaint } from "features/complaint";
import { TNews } from "features/home";

export type RootStackParamList = {
    Main: undefined;
    Login: undefined;
    Register: undefined;
    ResetPassword: undefined;
    ResetPasswordForm: TResetPasswordRequest;
    BottomTab: undefined
    Clapper: undefined;
    Complaint: undefined;
    ComplaintDetail: TComplaint;
    NewsDetail: TNews;
    UpdateComplaint: TComplaint;
};

export type StackNavigation = NavigationProp<RootStackParamList>;

export type BottomTabParamList = {
    Home: undefined;
    Center: undefined;
    Profile: undefined;
};

export type BottomTabNavigation = BottomTabNavigationProp<BottomTabParamList>;