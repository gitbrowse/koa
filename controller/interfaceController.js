import fs from 'fs';

const uploadFile = async (data, file) => {

    const RET = {
        code: '200',
        success: false,
        msg: '',
        data: null,
    };

    try {
        fs.renameSync(file.path,`./assert/upload/${file.name}`);
        RET.success = true;
    }catch (e) {
        RET.msg = '上传失败';
    }

    return RET;
};

export {
    uploadFile,
};