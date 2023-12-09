import {
  UploadButton,
  UploadFileHidden,
  UploadImage,
} from "./Uploads01.styles";
import type { IUploads01UIProps } from "./Uploads01.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export default function Uploads01UI(props: IUploads01UIProps): JSX.Element {
  return (
    <>
      {props.fileUrl !== "" ? (
        <UploadImage
          onClick={props.onClickUpload}
          src={`https://storage.googleapis.com/${props.fileUrl}`}
        />
      ) : (
        <UploadButton type="button" onClick={props.onClickUpload}>
          <FontAwesomeIcon icon={faImage} />
        </UploadButton>
      )}
      <UploadFileHidden
        type="file"
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
}
