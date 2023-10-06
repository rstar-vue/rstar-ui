import type { ExtractPropTypes, PropType } from 'vue';
export type ButtonType = 'primary' | 'warn' | 'error';
export declare const buttonProps: {
    readonly type: {
        readonly type: PropType<ButtonType>;
        readonly default: "primary";
    };
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonInstance = InstanceType<typeof Text>;
