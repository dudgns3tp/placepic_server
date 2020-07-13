let responseMessage = require('../modules/responseMessage');
let statusCode = require('../modules/statusCode');
let util = require('../modules/util');
let Group = require('../models/group');
const crypto = require('crypto');
const jwt = require('../modules/jwt');

exports.apply = async (req, res) => {
    const groupIdx = req.params.groupIdx;
    const userIdx = req.userIdx;
    const groupInfo = await Group.callMygroupInfo(groupIdx);
    //const status = 2; // 디폴트가 2가 아니면 2를 넣어준다.
    const {
        part,
        phoneNumber
    } = req.body;
    try {
        //null 값 확인
        if (!groupIdx || !userIdx || !part || !phoneNumber){
            console.log("필요한 값이 없습니다.");
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
        }
        //1. 해당그룹이존재하는지
        if(!(await Group.checkGroupIdx(groupIdx))){
            console.log("해당그룹이 존재하지 않습니다.");
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.CALL_GROUP_FAIL));
        }
        
        //2. 이미 신청한 그룹인지
        console.log(await Group.checkAlreadyGroup(userIdx,groupIdx))
        if(!(await Group.checkAlreadyGroup(userIdx,groupIdx))) {
            console.log("이미 가입된 그룹입니다.");
            return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_GROUP_USER));
        }

        const groupApply = await Group.apply(groupIdx, userIdx, part, phoneNumber);
        //성공
        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.apply_SUCCESS,{
            groupName : groupInfo[0].groupName,
            groupImage :groupInfo[0].groupImage}));
    } catch (err) {
        console.log('apply error', err)
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, err.message));
    }
};


exports.getMyGroupList = async (req, res) => {

    const userIdx = req.userIdx;
    const QueryObject = req.query;
    try {
        //const groupInfo = await Group.callMygroupInfo(userIdx); //그룹에 대한 이름, 이미지
        const groupUserCnt = await Group.callMygroupUserCnt(userIdx); // 그룹에 대한 유저 수
        const groupPostCnt = await Group.callMygroupPostCnt(userIdx); // 그룹에 대한 게시물 수
        const myGroupList = await Group.getMyGroupList(userIdx, QueryObject);
        console.log('11');
        for (let i = 0; i < myGroupList.length; i++) {
            const myGroupUserCnt = await Group.getGroupUserCnt(myGroupList[i].groupIdx);
            const myGroupPostCnt = await Group.getGroupPostCnt(myGroupList[i].groupIdx);
            myGroupList[i].UserCount = myGroupUserCnt;
            myGroupList[i].PostCount = myGroupPostCnt;
        }

        console.log("그룹을 성공적으로 불러왔습니다.")
        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CALL_GROUP_LIST, 
            myGroupList
        //    myGroupList: myGroupList.filter(group => group.groupIdx !== null)
          // model부분에 GroupBy 처리 해준것
        ));
    } catch (err) {
        console.log("그룹을 불러오지 못했습니다.")
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, err.message));
        throw err;
    }
};

exports.getMyApplyGroupList = async (req, res) => {
    try {
        const result = await Group.getMyApplyGroupList(req.userIdx);
        return res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CALL_MYWAITUSERLIST_SUCCESS, result));
    } catch(e) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, e.message));
    }
};


