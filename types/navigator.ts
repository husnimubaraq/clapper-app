import { NavigationProp } from "@react-navigation/native";
import { 
    TForgotPasswordRequest, 
    TForgotPasswordOtpRequest,
    TRegisterOtpRequest, 
    TRegisterRequest 
} from "features/auth";

export type RootStackParamList = {
    Main: undefined;
    Home: undefined;
    Login: undefined;
    Register: undefined;
    Verification: TRegisterRequest & TForgotPasswordRequest;
    CreatePassword: TRegisterOtpRequest & TForgotPasswordOtpRequest;
    ForgotPassword: undefined;
};

export type StackNavigation = NavigationProp<RootStackParamList>;