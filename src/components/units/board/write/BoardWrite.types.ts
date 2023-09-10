import type { IQuery } from "../../../../commons/types/generated/types";
import {
  UseFormRegister,
  FieldValues,
  UseFormHandleSubmit,
  FormState,
} from "react-hook-form";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  register: UseFormRegister<{
    writer: string;
    password: string;
    title: string;
    contents: string;
    boardAddress: {
      zipcode?: string | undefined;
      address?: string | undefined;
      addressDetail?: string | undefined;
    };
    youtubeUrl: string | undefined;
  }>;

  formState: FormState<{
    writer: string;
    password: string;
    title: string;
    contents: string;
    boardAddress: {
      zipcode?: string | undefined;
      address?: string | undefined;
      addressDetail?: string | undefined;
    };
    youtubeUrl: string;
  }>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  onClickSubmit: (data: any) => void;
  onClickAddressSearch: () => void;
  onCompleteAddressSearch: (data: any) => void;
  onClickUpdate: (data: any) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  isOpen: boolean;
  zipcode: string;
  address: string;
  fileUrls: string[];
}

export interface ISubmitButtonProps {
  isActive: boolean;
}
