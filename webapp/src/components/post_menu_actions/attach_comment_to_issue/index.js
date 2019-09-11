// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getPost} from 'mattermost-redux/selectors/entities/posts';
import {isSystemMessage} from 'mattermost-redux/utils/post_utils';

import {openAttachCommentToIssueModal} from 'actions';

import {isUserConnected, isInstanceInstalled} from 'selectors';

import AttachCommentToIssuePostMenuAction from './attach_comment_to_issue';

const mapStateToProps = (state, ownProps) => {
    const post = getPost(state, ownProps.postId);
    const systemMessage = post ? isSystemMessage(post) : true;

    return {
        isSystemMessage: systemMessage,
        userConnected: isUserConnected(state),
        isInstanceInstalled: isInstanceInstalled(state),
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    open: openAttachCommentToIssueModal,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AttachCommentToIssuePostMenuAction);
