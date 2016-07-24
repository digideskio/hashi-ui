import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import Table from '../table'

const JobEvals = ({ evaluations, job }) => {

        // build the job evaluation table
        const evals = evaluations.filter((evaluation) => {
            return (evaluation.JobID === job.ID);
        }).map((evaluation) => {
            return (
                <tr key={evaluation.ID}>
                    <td><Link to={`/evaluations/${evaluation.ID}`}>{evaluation.ID.substring(0,8)}</Link></td>
                    <td>{evaluation.Status}</td>
                    <td>{evaluation.Type}</td>
                    <td>{evaluation.Priority}</td>
                </tr>
            )
        })

        return (
            <div className="tab-pane active">
                {(evaluations.length > 0) ?
                    <Table classes="table table-hover table-striped" headers={["ID", "Status", "Type", "Priority" ]} body={evals} />
                    : null
                }
            </div>
        )
}

function mapStateToProps({ evaluations, job }) {
    return { evaluations, job }
}

export default connect(mapStateToProps)(JobEvals);
