import { AttributeValue } from "./attributeValue-interface";

export interface Attribute {
    values: AttributeValue[];
    attribute_group_id: string;
    attribute_group_name: string;
    id: string;
    value_id: string;
    value_name: string;
    value_struct?: any;
    source: number;
    name: string;
  }