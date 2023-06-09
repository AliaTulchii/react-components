import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import PropTypes from 'prop-types';
import { iconSize } from 'constants';
import { formatEventStart } from "utils/formatEventStart";
import { formatEventDuration } from 'utils/formatEventDuration';
import { Card, Title, Info, Chip } from './Event.styled';

export const Event = ({ name, location, speaker, type, start, end }) => {
    const formattedStart = formatEventStart(start);
    const duration = formatEventDuration(start, end);
    return (
        <Card>
            <Title>{name}</Title>
            <Info >
                <FaMapMarkerAlt  size={iconSize.sm} />
                {location}
            </Info>
            <Info >
            <FaUserAlt  size={iconSize.sm} />
                {speaker}
            </Info>
            <Info >
            <FaCalendarAlt  size={iconSize.sm} />
                {formattedStart}
            </Info>
            <Info>
            <FaClock  size={iconSize.sm} />
                {duration}
            </Info>
            <Chip type={type}>{type}</Chip>
        </Card>
    )
}

Event.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired
}