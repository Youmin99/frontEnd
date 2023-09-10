import { Modal } from "antd";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export function checkValidationImage(file?: File): boolean {
  if (file?.size === undefined) {
    Modal.error({ content: "no file." });
    return false;
  }

  if (file.size > MAX_FILE_SIZE) {
    Modal.error({ content: "file is too big.(limit: 5MB)" });
    return false;
  }

  if (!file.type.includes("png") && !file.type.includes("jpeg")) {
    Modal.error({
      content: "write correct name.(png, jpeg)",
    });
    return false;
  }

  return true;
}
