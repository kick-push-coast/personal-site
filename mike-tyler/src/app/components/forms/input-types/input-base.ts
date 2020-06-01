export class InputClass<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    type: InputType;
    options: {key: string, value: string}[];

    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        type?: InputType
      } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.type = options.type || InputType.none;
    }
}

export enum InputType {
    none = '',
    text = 'text',
    email = 'email',
    password = 'password'
}
